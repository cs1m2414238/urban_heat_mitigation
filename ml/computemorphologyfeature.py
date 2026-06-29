import os
import pandas as pd
import geopandas as gpd
from shapely.geometry import Point

def get_spatial_candidates(gdf, buffer_geom):
    """
    Leverages spatial index (R-tree) to quickly filter candidate geometries.
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
        print(f"❌ Master GEE dataset not found.")
        return
        
    df = pd.read_csv(gee_csv_path)
    print(f"Loaded master dataset with {len(df)} rows.")

    # Convert coordinates to metric CRS for accurate spatial calculations
    geometry = [Point(xy) for xy in zip(df['Longitude'], df['Latitude'])]
    gdf_points = gpd.GeoDataFrame(df, geometry=geometry, crs="EPSG:4326")
    gdf_points = gdf_points.to_crs(epsg=3857)
    
    BUFFER_RADIUS = 500 
    buffer_area = 3.14159 * (BUFFER_RADIUS ** 2)
    buffer_area_km2 = buffer_area / 1000000.0
    
    unique_cities = df['City'].unique()
    
    for city in unique_cities:
        print(f"\nProcessing city: {city}")
        
        # Load local datasets
        b_file = os.path.join(osm_dir, f"{city.lower()}_buildings.geojson")
        s_file = os.path.join(osm_dir, f"{city.lower()}_streets.geojson")
        p_file = os.path.join(osm_dir, f"{city.lower()}_parks.geojson")
        w_file = os.path.join(osm_dir, f"{city.lower()}_water.geojson")
        f_file = os.path.join(osm_dir, f"{city.lower()}_forests.geojson")
        
        buildings = gpd.read_file(b_file).to_crs(epsg=3857) if os.path.exists(b_file) else gpd.GeoDataFrame(geometry=[], crs="EPSG:3857")
        if not buildings.empty: _ = buildings.sindex
        
        streets = gpd.read_file(s_file).to_crs(epsg=3857) if os.path.exists(s_file) else gpd.GeoDataFrame(geometry=[], crs="EPSG:3857")
        if not streets.empty: _ = streets.sindex
        
        parks = gpd.read_file(p_file).to_crs(epsg=3857) if os.path.exists(p_file) else gpd.GeoDataFrame(geometry=[], crs="EPSG:3857")
        if not parks.empty: _ = parks.sindex
        
        water = gpd.read_file(w_file).to_crs(epsg=3857) if os.path.exists(w_file) else gpd.GeoDataFrame(geometry=[], crs="EPSG:3857")
        if not water.empty: _ = water.sindex
        
        forests = gpd.read_file(f_file).to_crs(epsg=3857) if os.path.exists(f_file) else gpd.GeoDataFrame(geometry=[], crs="EPSG:3857")
        if not forests.empty: _ = forests.sindex
        
        if buildings.empty and streets.empty and parks.empty and water.empty and forests.empty:
            print(f"⚠ No spatial files found for {city}. Skipping.")
            continue
            
        city_points = gdf_points[gdf_points['City'] == city]
        
        for idx, point_row in city_points.iterrows():
            pt = point_row['geometry']
            pt_buffer = pt.buffer(BUFFER_RADIUS)
            
            # Buildings
            b_count = 0
            bcr = 0.0
            mean_b_area = 0.0
            if not buildings.empty:
                possible_buildings = get_spatial_candidates(buildings, pt_buffer)
                b_count = len(possible_buildings)
                if b_count > 0:
                    intersected_buildings = possible_buildings.intersection(pt_buffer)
                    total_b_area = intersected_buildings.area.sum()
                    bcr = (total_b_area / buffer_area) * 100
                    mean_b_area = possible_buildings.geometry.area.mean()
            
            # Streets & Intersections
            r_density = 0.0
            d_to_road = -1.0
            road_coverage_ratio = 0.0
            intersection_density = 0.0
            
            if not streets.empty:
                possible_streets = get_spatial_candidates(streets, pt_buffer)
                if not possible_streets.empty:
                    intersected_streets = possible_streets.intersection(pt_buffer)
                    total_road_length = intersected_streets.length.sum()
                    r_density = total_road_length / buffer_area
                    road_coverage_ratio = (total_road_length * 8.0 / buffer_area) * 100
                    
                    # Extract intersection endpoints
                    endpoints = []
                    for geom in possible_streets.geometry:
                        if geom.geom_type == 'LineString':
                            endpoints.append(geom.coords[0])
                            endpoints.append(geom.coords[-1])
                        elif geom.geom_type == 'MultiLineString':
                            for line in geom.geoms:
                                endpoints.append(line.coords[0])
                                endpoints.append(line.coords[-1])
                    
                    unique_nodes = set(endpoints)
                    intersection_count = sum(1 for node_coords in unique_nodes if pt_buffer.contains(Point(node_coords)))
                    intersection_density = intersection_count / buffer_area_km2
                
                close_streets = get_spatial_candidates(streets, pt.buffer(1500))
                d_to_road = pt.distance(close_streets.geometry).min() if not close_streets.empty else pt.distance(streets.geometry).min()
            
            # Impervious Surface Ratio
            impervious_ratio = min(bcr + road_coverage_ratio, 100.0)
                
            # Parks
            park_coverage = 0.0
            d_to_park = -1.0
            if not parks.empty:
                possible_parks = get_spatial_candidates(parks, pt_buffer)
                if not possible_parks.empty:
                    intersected_parks = possible_parks.intersection(pt_buffer)
                    total_p_area = intersected_parks.area.sum()
                    park_coverage = (total_p_area / buffer_area) * 100
                
                close_parks = get_spatial_candidates(parks, pt.buffer(1500))
                d_to_park = pt.distance(close_parks.geometry).min() if not close_parks.empty else pt.distance(parks.geometry).min()
                
            # Water Bodies
            water_coverage = 0.0
            d_to_water = -1.0
            if not water.empty:
                possible_water = get_spatial_candidates(water, pt_buffer)
                if not possible_water.empty:
                    intersected_water = possible_water.intersection(pt_buffer)
                    total_w_area = intersected_water.area.sum()
                    water_coverage = (total_w_area / buffer_area) * 100
                
                close_water = get_spatial_candidates(water, pt.buffer(1500))
                d_to_water = pt.distance(close_water.geometry).min() if not close_water.empty else pt.distance(water.geometry).min()
                
            # Forests/Trees
            forest_coverage = 0.0
            d_to_forest = -1.0
            if not forests.empty:
                possible_forests = get_spatial_candidates(forests, pt_buffer)
                if not possible_forests.empty:
                    intersected_forests = possible_forests.intersection(pt_buffer)
                    total_f_area = intersected_forests.area.sum()
                    forest_coverage = (total_f_area / buffer_area) * 100
                
                close_forests = get_spatial_candidates(forests, pt.buffer(1500))
                d_to_forest = pt.distance(close_forests.geometry).min() if not close_forests.empty else pt.distance(forests.geometry).min()
                
            # Update columns
            gdf_points.loc[idx, 'Building_Density'] = b_count
            gdf_points.loc[idx, 'Building_Coverage_Ratio'] = bcr
            gdf_points.loc[idx, 'Mean_Building_Area'] = mean_b_area
            gdf_points.loc[idx, 'Road_Density'] = r_density
            gdf_points.loc[idx, 'Distance_to_Road'] = d_to_road
            gdf_points.loc[idx, 'Impervious_Surface_Ratio'] = impervious_ratio
            gdf_points.loc[idx, 'Intersection_Density'] = intersection_density
            gdf_points.loc[idx, 'Park_Coverage_Ratio'] = park_coverage
            gdf_points.loc[idx, 'Distance_to_Park'] = d_to_park
            gdf_points.loc[idx, 'Water_Coverage_Ratio'] = water_coverage
            gdf_points.loc[idx, 'Distance_to_Water'] = d_to_water
            gdf_points.loc[idx, 'Forest_Coverage_Ratio'] = forest_coverage
            gdf_points.loc[idx, 'Distance_to_Forest'] = d_to_forest

    # Remove spatial geometry and save to CSV
    final_df = pd.DataFrame(gdf_points.drop(columns='geometry'))
    output_csv = os.path.join(base_dir, "Final_ML_Dataset_With_Morphology.csv")
    final_df.to_csv(output_csv, index=False)
    print(f"\n✔ Success! Final dataset saved to: {output_csv}")
    print(f"Shape: {final_df.shape}")

if __name__ == "__main__":
    compute_morphology_features()