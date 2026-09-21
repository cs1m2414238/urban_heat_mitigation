import os
import sys
import time
import pandas as pd
import geopandas as gpd
from shapely.geometry import Point

if hasattr(sys.stdout, 'reconfigure'):
    try:
        sys.stdout.reconfigure(encoding='utf-8', errors='replace')
        sys.stderr.reconfigure(encoding='utf-8', errors='replace')
    except Exception:
        pass

def get_spatial_candidates(gdf, buffer_geom):
    """
    Leverages spatial index (STRtree / R-tree) to quickly filter candidate geometries.
    """
    if gdf.empty:
        return gdf
    try:
        if hasattr(gdf.sindex, "query"):
            idx = gdf.sindex.query(buffer_geom, predicate="intersects")
            return gdf.iloc[idx]
        else:
            idx = list(gdf.sindex.intersection(buffer_geom.bounds))
            candidates = gdf.iloc[idx]
            return candidates[candidates.intersects(buffer_geom)]
    except Exception:
        return gdf[gdf.intersects(buffer_geom)]

def get_distance_to_nearest(gdf, pt, search_radius=1500):
    """
    Calculates distance to nearest geometry in gdf.
    Uses local candidate search first, then spatial index nearest-neighbor fallback.
    """
    if gdf.empty:
        return -1.0
    cand = get_spatial_candidates(gdf, pt.buffer(search_radius))
    if not cand.empty:
        return float(pt.distance(cand.geometry).min())
    try:
        nearest_res = gdf.sindex.nearest(pt)
        if hasattr(nearest_res, "shape") and len(nearest_res.shape) == 2:
            nearest_idx = nearest_res[1][0]
        elif hasattr(nearest_res, "__iter__"):
            nearest_idx = nearest_res[0]
        else:
            nearest_idx = nearest_res
        return float(pt.distance(gdf.iloc[nearest_idx].geometry))
    except Exception:
        return float(pt.distance(gdf.geometry).min())

def compute_morphology_features():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    osm_dir = os.path.join(base_dir, "dataset_osm")
    
    # Locate the master GEE dataset
    gee_csv_path = os.path.join(base_dir, "Merged_ML_Dataset.csv")
    if not os.path.exists(gee_csv_path):
        gee_csv_path = os.path.join(os.path.dirname(base_dir), "datasetcsv", "Merged_ML_Dataset.csv")
        if not os.path.exists(gee_csv_path):
            gee_csv_path = os.path.join(os.path.dirname(base_dir), "Merged_ML_Dataset.csv")
            
    if not os.path.exists(gee_csv_path):
        print("[ERROR] Master GEE dataset not found.", flush=True)
        return
        
    df = pd.read_csv(gee_csv_path)
    print(f"Loaded master dataset with {len(df)} rows from: {gee_csv_path}", flush=True)

    # Convert coordinates to metric CRS for accurate spatial calculations
    geometry = [Point(xy) for xy in zip(df['Longitude'], df['Latitude'])]
    gdf_points = gpd.GeoDataFrame(df, geometry=geometry, crs="EPSG:4326")
    gdf_points = gdf_points.to_crs(epsg=3857)
    
    BUFFER_RADIUS = 500 
    buffer_area = 3.14159 * (BUFFER_RADIUS ** 2)
    buffer_area_km2 = buffer_area / 1000000.0
    
    unique_cities = df['City'].unique()
    city_dfs = []
    
    checkpoint_dir = os.path.join(base_dir, "checkpoints")
    os.makedirs(checkpoint_dir, exist_ok=True)
    
    for city in unique_cities:
        print(f"\n{'='*60}", flush=True)
        print(f"Processing city: {city}", flush=True)
        print(f"{'='*60}", flush=True)
        
        ckpt_file = os.path.join(checkpoint_dir, f"checkpoint_{city.lower()}.csv")
        city_points = gdf_points[gdf_points['City'] == city].copy()
        
        # Check if already processed from checkpoint
        if os.path.exists(ckpt_file):
            ckpt_df = pd.read_csv(ckpt_file)
            if len(ckpt_df) == len(city_points) and 'Building_Density' in ckpt_df.columns:
                print(f"[OK] Found valid existing checkpoint for {city} ({len(ckpt_df)} rows). Loaded.", flush=True)
                city_dfs.append(ckpt_df)
                continue
        
        # Load local datasets
        b_file = os.path.join(osm_dir, f"{city.lower()}_buildings.geojson")
        s_file = os.path.join(osm_dir, f"{city.lower()}_streets.geojson")
        p_file = os.path.join(osm_dir, f"{city.lower()}_parks.geojson")
        w_file = os.path.join(osm_dir, f"{city.lower()}_water.geojson")
        f_file = os.path.join(osm_dir, f"{city.lower()}_forests.geojson")
        
        t0 = time.time()
        print(f"Loading layers for {city}...", flush=True)
        
        buildings = gpd.read_file(b_file).to_crs(epsg=3857) if os.path.exists(b_file) else gpd.GeoDataFrame(geometry=[], crs="EPSG:3857")
        if not buildings.empty: _ = buildings.sindex
        print(f" - Buildings: {len(buildings):,} features", flush=True)
        
        streets = gpd.read_file(s_file).to_crs(epsg=3857) if os.path.exists(s_file) else gpd.GeoDataFrame(geometry=[], crs="EPSG:3857")
        if not streets.empty: _ = streets.sindex
        print(f" - Streets: {len(streets):,} features", flush=True)
        
        parks = gpd.read_file(p_file).to_crs(epsg=3857) if os.path.exists(p_file) else gpd.GeoDataFrame(geometry=[], crs="EPSG:3857")
        if not parks.empty: _ = parks.sindex
        print(f" - Parks: {len(parks):,} features", flush=True)
        
        water = gpd.read_file(w_file).to_crs(epsg=3857) if os.path.exists(w_file) else gpd.GeoDataFrame(geometry=[], crs="EPSG:3857")
        if not water.empty: _ = water.sindex
        print(f" - Water: {len(water):,} features", flush=True)
        
        forests = gpd.read_file(f_file).to_crs(epsg=3857) if os.path.exists(f_file) else gpd.GeoDataFrame(geometry=[], crs="EPSG:3857")
        if not forests.empty: _ = forests.sindex
        print(f" - Forests: {len(forests):,} features", flush=True)
        
        # Pre-extract road intersection nodes once per city
        if not streets.empty:
            endpoints = []
            for geom in streets.geometry:
                if geom is None or geom.is_empty:
                    continue
                if geom.geom_type == 'LineString':
                    endpoints.append(geom.coords[0])
                    endpoints.append(geom.coords[-1])
                elif geom.geom_type == 'MultiLineString':
                    for line in geom.geoms:
                        endpoints.append(line.coords[0])
                        endpoints.append(line.coords[-1])
            if endpoints:
                unique_pts = [Point(xy) for xy in set(endpoints)]
                nodes_gdf = gpd.GeoDataFrame(geometry=unique_pts, crs="EPSG:3857")
                _ = nodes_gdf.sindex
                print(f" - Pre-indexed {len(nodes_gdf):,} road intersection nodes", flush=True)
            else:
                nodes_gdf = gpd.GeoDataFrame(geometry=[], crs="EPSG:3857")
        else:
            nodes_gdf = gpd.GeoDataFrame(geometry=[], crs="EPSG:3857")
            
        print(f"Layers loaded & indexed in {time.time()-t0:.1f}s. Computing morphology features for {len(city_points):,} points...", flush=True)
        
        morph_rows = []
        point_start = time.time()
        
        total_pts = len(city_points)
        
        for count, point_row in enumerate(city_points.itertuples(index=True)):
            idx = point_row.Index
            pt = point_row.geometry
            pt_buffer = pt.buffer(BUFFER_RADIUS)
            
            # 1. Buildings
            b_count = 0
            bcr = 0.0
            mean_b_area = 0.0
            if not buildings.empty:
                possible_buildings = get_spatial_candidates(buildings, pt_buffer)
                b_count = len(possible_buildings)
                if b_count > 0:
                    intersected_buildings = possible_buildings.intersection(pt_buffer)
                    total_b_area = intersected_buildings.area.sum()
                    bcr = (total_b_area / buffer_area) * 100.0
                    mean_b_area = float(possible_buildings.geometry.area.mean())
            
            # 2. Streets & Intersections
            r_density = 0.0
            road_coverage_ratio = 0.0
            intersection_density = 0.0
            d_to_road = -1.0
            
            if not streets.empty:
                possible_streets = get_spatial_candidates(streets, pt_buffer)
                if not possible_streets.empty:
                    intersected_streets = possible_streets.intersection(pt_buffer)
                    total_road_length = intersected_streets.length.sum()
                    r_density = float(total_road_length / buffer_area)
                    road_coverage_ratio = float((total_road_length * 8.0 / buffer_area) * 100.0)
                    
                if not nodes_gdf.empty:
                    node_cand = get_spatial_candidates(nodes_gdf, pt_buffer)
                    intersection_density = float(len(node_cand) / buffer_area_km2)
                    
                d_to_road = get_distance_to_nearest(streets, pt, search_radius=1500)
            
            # 3. Impervious Surface Ratio
            impervious_ratio = min(bcr + road_coverage_ratio, 100.0)
                
            # 4. Parks
            park_coverage = 0.0
            d_to_park = -1.0
            if not parks.empty:
                possible_parks = get_spatial_candidates(parks, pt_buffer)
                if not possible_parks.empty:
                    intersected_parks = possible_parks.intersection(pt_buffer)
                    total_p_area = intersected_parks.area.sum()
                    park_coverage = float((total_p_area / buffer_area) * 100.0)
                d_to_park = get_distance_to_nearest(parks, pt, search_radius=1500)
                
            # 5. Water Bodies
            water_coverage = 0.0
            d_to_water = -1.0
            if not water.empty:
                possible_water = get_spatial_candidates(water, pt_buffer)
                if not possible_water.empty:
                    intersected_water = possible_water.intersection(pt_buffer)
                    total_w_area = intersected_water.area.sum()
                    water_coverage = float((total_w_area / buffer_area) * 100.0)
                d_to_water = get_distance_to_nearest(water, pt, search_radius=1500)
                
            # 6. Forests/Trees
            forest_coverage = 0.0
            d_to_forest = -1.0
            if not forests.empty:
                possible_forests = get_spatial_candidates(forests, pt_buffer)
                if not possible_forests.empty:
                    intersected_forests = possible_forests.intersection(pt_buffer)
                    total_f_area = intersected_forests.area.sum()
                    forest_coverage = float((total_f_area / buffer_area) * 100.0)
                d_to_forest = get_distance_to_nearest(forests, pt, search_radius=1500)
                
            morph_rows.append({
                '_index': idx,
                'Building_Density': b_count,
                'Building_Coverage_Ratio': bcr,
                'Mean_Building_Area': mean_b_area,
                'Road_Density': r_density,
                'Distance_to_Road': d_to_road,
                'Impervious_Surface_Ratio': impervious_ratio,
                'Intersection_Density': intersection_density,
                'Park_Coverage_Ratio': park_coverage,
                'Distance_to_Park': d_to_park,
                'Water_Coverage_Ratio': water_coverage,
                'Distance_to_Water': d_to_water,
                'Forest_Coverage_Ratio': forest_coverage,
                'Distance_to_Forest': d_to_forest
            })
            
            if (count + 1) % 2000 == 0 or (count + 1) == total_pts:
                elapsed = time.time() - point_start
                rate = (count + 1) / elapsed
                remaining = (total_pts - count - 1) / rate if rate > 0 else 0
                print(f"   [{city}] {count+1:,}/{total_pts:,} ({((count+1)/total_pts)*100:.1f}%) | "
                      f"{rate:.1f} pts/sec | Elapsed: {elapsed/60:.1f}m | ETA: {remaining/60:.1f}m", flush=True)
        
        morph_df = pd.DataFrame(morph_rows).set_index('_index')
        for col in morph_df.columns:
            city_points[col] = morph_df[col]
            
        city_clean_df = pd.DataFrame(city_points.drop(columns='geometry'))
        city_clean_df.to_csv(ckpt_file, index=False)
        print(f"[OK] City {city} completed and saved to checkpoint: {ckpt_file}", flush=True)
        city_dfs.append(city_clean_df)

    # Combine all city results
    final_df = pd.concat(city_dfs, ignore_index=True)
    
    # Save to both ml/ directory and project root
    output_csv = os.path.join(base_dir, "Final_ML_Dataset_With_Morphology.csv")
    root_output_csv = os.path.join(os.path.dirname(base_dir), "Final_ML_Dataset_With_Morphology.csv")
    
    final_df.to_csv(output_csv, index=False)
    final_df.to_csv(root_output_csv, index=False)
    
    print(f"\n{'='*60}", flush=True)
    print(f"[SUCCESS] Final dataset saved to:", flush=True)
    print(f"   - {output_csv}", flush=True)
    print(f"   - {root_output_csv}", flush=True)
    print(f"Final shape: {final_df.shape}", flush=True)
    print(f"{'='*60}\n", flush=True)
    
    # Validation & Quality Checks
    print("--- City-wise Sample Distribution ---", flush=True)
    print(final_df['City'].value_counts(), flush=True)
    
    print("\n--- Missing Values Count per Feature ---", flush=True)
    missing = final_df.isnull().sum()
    print(missing[missing > 0] if (missing > 0).any() else "No missing values found across any columns!", flush=True)

if __name__ == "__main__":
    compute_morphology_features()