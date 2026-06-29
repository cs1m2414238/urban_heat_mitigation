import os
import sys

try:
    import osmnx as ox
except ImportError:
    print("ERROR: 'osmnx' library is not installed. Please run: pip install osmnx geopandas")
    sys.exit(1)

# Define the target cities and queries
CITIES = {
    "Delhi": "Delhi, India",
    "Kanpur": "Kanpur, Uttar Pradesh, India",
    "Lucknow": "Lucknow, Uttar Pradesh, India",
    "Bengaluru": "Bengaluru, Karnataka, India"
}

def download_and_save_features(query, tags, filepath, label):
    print(f"Downloading {label} for query '{query}'...")
    try:
        # Compatibility between older and newer osmnx versions
        if hasattr(ox, "features_from_place"):
            gdf = ox.features_from_place(query, tags=tags)
        else:
            gdf = ox.geometries_from_place(query, tags=tags)
            
        if not gdf.empty:
            # Convert any list/dict columns to strings to prevent GeoJSON write errors
            for col in gdf.columns:
                if gdf[col].apply(lambda x: isinstance(x, (list, dict))).any():
                    gdf[col] = gdf[col].astype(str)
                    
            gdf.to_file(filepath, driver="GeoJSON")
            print(f"✔ Saved {label}: {filepath} (Shape: {gdf.shape})")
        else:
            print(f"⚠ No {label} found for {query}.")
    except Exception as e:
        print(f"❌ Error downloading {label}: {e}")

def download_osm_data(city_name, query, output_dir):
    print(f"\n==================================================")
    print(f"Processing: {city_name} ({query})")
    print(f"==================================================")
    
    # Define filenames
    buildings_file = os.path.join(output_dir, f"{city_name.lower()}_buildings.geojson")
    parks_file = os.path.join(output_dir, f"{city_name.lower()}_parks.geojson")
    water_file = os.path.join(output_dir, f"{city_name.lower()}_water.geojson")
    forests_file = os.path.join(output_dir, f"{city_name.lower()}_forests.geojson")
    streets_file = os.path.join(output_dir, f"{city_name.lower()}_streets.geojson")
    
    # 1. Download buildings footprint
    download_and_save_features(query, {"building": True}, buildings_file, "buildings")
    
    # 2. Download parks
    download_and_save_features(query, {"leisure": "park"}, parks_file, "parks")
    
    # 3. Download water bodies
    download_and_save_features(query, {"natural": "water"}, water_file, "water bodies")
    
    # 4. Download forest/tree cover
    download_and_save_features(query, {"landuse": "forest"}, forests_file, "forests/trees")
    
    # 5. Download street network
    print(f"Downloading street network for {city_name}...")
    try:
        street_network = ox.graph_from_place(query, network_type="drive")
        
        # Convert network graph to GeoDataFrames
        nodes, edges = ox.graph_to_gdfs(street_network)
        
        if not edges.empty:
            # Clean list/dict columns in edges
            for col in edges.columns:
                if edges[col].apply(lambda x: isinstance(x, (list, dict))).any():
                    edges[col] = edges[col].astype(str)
                    
            edges.to_file(streets_file, driver="GeoJSON")
            print(f"✔ Saved street network: {streets_file} (Shape: {edges.shape})")
        else:
            print(f"⚠ No street network found for {city_name}.")
    except Exception as e:
        print(f"❌ Error downloading street network: {e}")

def main():
    # Setup output directory
    output_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "dataset_osm")
    os.makedirs(output_dir, exist_ok=True)
    
    # Configure osmnx cache and console logging settings
    ox.settings.use_cache = True
    ox.settings.log_console = False
    
    for city_name, query in CITIES.items():
        download_osm_data(city_name, query, output_dir)
        
    print("\nAll tasks completed!")

if __name__ == "__main__":
    main()
