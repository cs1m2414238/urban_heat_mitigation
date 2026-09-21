import os
import sys
import json
import pandas as pd
import numpy as np
import geopandas as gpd
from shapely.geometry import Point
import xgboost as xgb

if hasattr(sys.stdout, "reconfigure"):
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
        sys.stderr.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

def generate_hotspots():
    print("=" * 75, flush=True)
    print("ISRO Urban Heat Mitigation - City-Specific Heat Hotspots Generator", flush=True)
    print("=" * 75, flush=True)

    base_dir = os.path.dirname(os.path.abspath(__file__))
    project_root = os.path.dirname(base_dir)

    dataset_path = os.path.join(base_dir, "Final_ML_Dataset_With_Morphology.csv")
    if not os.path.exists(dataset_path):
        dataset_path = os.path.join(project_root, "Final_ML_Dataset_With_Morphology.csv")
        
    model_path = os.path.join(base_dir, "models", "xgboost_lst_model.json")
    if not os.path.exists(model_path):
        model_path = os.path.join(project_root, "backend", "app", "models", "xgboost_lst_model.json")

    print(f"Loading dataset: {dataset_path}", flush=True)
    df = pd.read_csv(dataset_path)

    print(f"Loading model: {model_path}", flush=True)
    model = xgb.XGBRegressor()
    model.load_model(model_path)

    feature_cols = [
        "NDVI", "S2_NDVI", "NDBI", "NDWI", "LULC", "DistToVeg", "GHSL", "DEM",
        "AirTemp", "RH", "WindSpeed",
        "Building_Density", "Building_Coverage_Ratio", "Mean_Building_Area",
        "Road_Density", "Distance_to_Road", "Impervious_Surface_Ratio",
        "Intersection_Density", "Park_Coverage_Ratio", "Distance_to_Park",
        "Water_Coverage_Ratio", "Distance_to_Water", "Forest_Coverage_Ratio",
        "Distance_to_Forest"
    ]

    print("Generating model predictions across all 70,595 points...", flush=True)
    df["Predicted_LST"] = model.predict(df[feature_cols])

    hotspot_records = []
    city_thresholds = {}

    print("\nCalculating city-specific percentile thermal baselines...", flush=True)
    for city in df["City"].unique():
        c_mask = df["City"] == city
        c_df = df[c_mask].copy()

        # Compute city-specific percentiles
        p75 = float(np.percentile(c_df["LST"], 75))
        p90 = float(np.percentile(c_df["LST"], 90))
        p95 = float(np.percentile(c_df["LST"], 95))
        p99 = float(np.percentile(c_df["LST"], 99))

        city_thresholds[city] = {
            "samples": len(c_df),
            "min_lst": round(float(c_df["LST"].min()), 2),
            "mean_lst": round(float(c_df["LST"].mean()), 2),
            "max_lst": round(float(c_df["LST"].max()), 2),
            "p75": round(p75, 2),
            "p90": round(p90, 2),
            "p95": round(p95, 2),
            "p99": round(p99, 2)
        }

        print(f"  [{city:<10}] Mean: {city_thresholds[city]['mean_lst']:5.2f}°C | P75: {p75:5.2f}°C | P90: {p90:5.2f}°C | P95: {p95:5.2f}°C | P99: {p99:5.2f}°C", flush=True)

        # Rank against the complete city distribution before filtering. Ranking
        # the P75+ subset again incorrectly compresses hotspot percentiles to 0-100.
        c_df["city_percentile"] = c_df["LST"].rank(pct=True, method="average") * 100

        # Select hotspots (LST >= P75)
        hs_city = c_df[c_df["LST"] >= p75].copy()

        for _, row in hs_city.iterrows():
            lst = float(row["LST"])
            
            # Primary city-specific percentile classification
            if lst >= p99:
                severity = "Critical"
            elif lst >= p95:
                severity = "Severe"
            elif lst >= p90:
                severity = "High"
            else:
                severity = "Moderate"

            # Determine primary heating driver
            ndbi = float(row["NDBI"])
            dist_veg = float(row["DistToVeg"])
            imp_ratio = float(row["Impervious_Surface_Ratio"])
            b_count = int(row["Building_Density"])

            if ndbi > 0.15 and imp_ratio > 60:
                primary_driver = "High Impervious & Built-up Density"
                recommendation = "High-albedo cool pavement retrofitting & pocket park integration"
            elif dist_veg > 400:
                primary_driver = "Severe Vegetation & Canopy Deficit"
                recommendation = "Dense urban tree canopy plantation & bioswale corridors"
            elif b_count > 50:
                primary_driver = "Intense Building Clustered Thermal Trapping"
                recommendation = "Cool roof implementation & green wall shading"
            elif ndbi > 0.05:
                primary_driver = "Built-surface Heat Absorption"
                recommendation = "Urban greening & reflective coating"
            else:
                primary_driver = "Ambient Microclimate Thermal Load"
                recommendation = "Micro-misting & shade canopy structures"

            hotspot_records.append({
                "city": city,
                "latitude": round(float(row["Latitude"]), 5),
                "longitude": round(float(row["Longitude"]), 5),
                "lst": round(lst, 2),
                "predicted_lst": round(float(row["Predicted_LST"]), 2),
                "severity": severity,
                "city_percentile": round(float(row["city_percentile"]), 1),
                "air_temp": round(float(row["AirTemp"]), 2),
                "ndvi": round(float(row["NDVI"]), 3),
                "ndbi": round(float(row["NDBI"]), 3),
                "dist_to_veg": round(dist_veg, 1),
                "impervious_surface_ratio": round(imp_ratio, 1),
                "building_density": b_count,
                "primary_driver": primary_driver,
                "recommended_action": recommendation,
                "geometry": Point(row["Longitude"], row["Latitude"])
            })

    # Create GeoDataFrame
    gdf_hotspots = gpd.GeoDataFrame(hotspot_records, crs="EPSG:4326")
    
    # Assign unique readable IDs per city
    for city in gdf_hotspots["city"].unique():
        c_mask = gdf_hotspots["city"] == city
        n_city = c_mask.sum()
        prefix = city[:3].upper()
        gdf_hotspots.loc[c_mask, "id"] = [f"HS_{prefix}_{i+1:04d}" for i in range(n_city)]

    cols_order = [
        "id", "city", "severity", "lst", "predicted_lst", "city_percentile",
        "primary_driver", "recommended_action",
        "air_temp", "ndvi", "ndbi", "dist_to_veg", "impervious_surface_ratio", "building_density",
        "latitude", "longitude", "geometry"
    ]
    gdf_hotspots = gdf_hotspots[cols_order]

    print("\n" + "=" * 75, flush=True)
    print("HOTSPOT SEVERITY DISTRIBUTION ACROSS CITIES (PERCENTILE-BASED)")
    print("=" * 75, flush=True)
    summary_table = pd.crosstab(gdf_hotspots["city"], gdf_hotspots["severity"], margins=True)
    print(summary_table.to_string(), flush=True)

    # Export to ml/ and backend/
    ml_output = os.path.join(base_dir, "hotspots.geojson")
    backend_dir = os.path.join(project_root, "backend", "app", "datasetcsv")
    os.makedirs(backend_dir, exist_ok=True)
    backend_output = os.path.join(backend_dir, "hotspots.geojson")

    gdf_hotspots.to_file(ml_output, driver="GeoJSON")
    gdf_hotspots.to_file(backend_output, driver="GeoJSON")

    # Export thresholds and metadata summary
    meta_summary = {
        "city_thresholds": city_thresholds,
        "total_hotspots": len(gdf_hotspots),
        "severity_counts": gdf_hotspots["severity"].value_counts().to_dict(),
        "criteria": {
            "Moderate": "P75 to <P90 within city",
            "High": "P90 to <P95 within city",
            "Severe": "P95 to <P99 within city",
            "Critical": ">=P99 within city"
        }
    }
    with open(os.path.join(backend_dir, "hotspot_summary.json"), "w", encoding="utf-8") as f:
        json.dump(meta_summary, f, indent=2)

    print("\n[SUCCESS] Hotspots GeoJSON generated and saved to:")
    print(f"   - {ml_output} ({len(gdf_hotspots):,} features)")
    print(f"   - {backend_output}")
    print(f"   - {os.path.join(backend_dir, 'hotspot_summary.json')}")
    print("=" * 75, flush=True)

if __name__ == "__main__":
    generate_hotspots()
