import os
import sys
import json
import time
import pandas as pd
import numpy as np
from sklearn.model_selection import GroupKFold
from sklearn.metrics import r2_score, mean_squared_error, mean_absolute_error
import xgboost as xgb

if hasattr(sys.stdout, "reconfigure"):
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
        sys.stderr.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

def create_spatial_blocks(df, n_bins=4):
    """
    Divides each city's bounding box into an n_bins x n_bins spatial block grid.
    Returns df with an added 'Spatial_Block_ID' column.
    """
    df = df.copy()
    block_ids = []
    
    for city in df["City"].unique():
        city_mask = df["City"] == city
        city_df = df[city_mask]
        
        # Subdivide longitude and latitude into uniform intervals
        lon_bins = pd.cut(city_df["Longitude"], bins=n_bins, labels=False)
        lat_bins = pd.cut(city_df["Latitude"], bins=n_bins, labels=False)
        
        city_blocks = [f"{city}_b_{r}_{c}" for r, c in zip(lat_bins, lon_bins)]
        df.loc[city_mask, "Spatial_Block_ID"] = city_blocks
        
    return df

def run_spatial_validation():
    print("=" * 75, flush=True)
    print("ISRO Urban Heat Mitigation - Spatial Block & LOCO Cross-Validation", flush=True)
    print("=" * 75, flush=True)

    base_dir = os.path.dirname(os.path.abspath(__file__))
    project_root = os.path.dirname(base_dir)
    dataset_path = os.path.join(base_dir, "Final_ML_Dataset_With_Morphology.csv")
    if not os.path.exists(dataset_path):
        dataset_path = os.path.join(project_root, "Final_ML_Dataset_With_Morphology.csv")
        
    if not os.path.exists(dataset_path):
        print(f"[ERROR] Dataset not found at: {dataset_path}", flush=True)
        return

    print(f"Loading dataset from: {dataset_path}", flush=True)
    df = pd.read_csv(dataset_path)
    print(f"Dataset shape: {df.shape}", flush=True)

    feature_cols = [
        "NDVI", "S2_NDVI", "NDBI", "NDWI", "LULC", "DistToVeg", "GHSL", "DEM",
        "AirTemp", "RH", "WindSpeed",
        "Building_Density", "Building_Coverage_Ratio", "Mean_Building_Area",
        "Road_Density", "Distance_to_Road", "Impervious_Surface_Ratio",
        "Intersection_Density", "Park_Coverage_Ratio", "Distance_to_Park",
        "Water_Coverage_Ratio", "Distance_to_Water", "Forest_Coverage_Ratio",
        "Distance_to_Forest"
    ]
    target_col = "LST"
    
    # -------------------------------------------------------------
    # 1. Spatial Block Assignment
    # -------------------------------------------------------------
    print("\nAssigning 4x4 spatial blocks per city to guard against autocorrelation...", flush=True)
    df = create_spatial_blocks(df, n_bins=4)
    unique_blocks = df["Spatial_Block_ID"].nunique()
    print(f"Created {unique_blocks} unique spatial blocks across 4 cities.", flush=True)

    # Base XGBoost hyperparameter configuration
    xgb_params = {
        "n_estimators": 400,
        "learning_rate": 0.05,
        "max_depth": 6,
        "subsample": 0.8,
        "colsample_bytree": 0.8,
        "min_child_weight": 3,
        "gamma": 0.1,
        "random_state": 42,
        "n_jobs": -1
    }

    # -------------------------------------------------------------
    # PART A: Spatial Block Cross-Validation (GroupKFold)
    # -------------------------------------------------------------
    print("\n" + "=" * 75, flush=True)
    print("PART A: 5-FOLD SPATIAL BLOCK CROSS-VALIDATION (GroupKFold)", flush=True)
    print("Entire geographic blocks are held out in each test fold.", flush=True)
    print("=" * 75, flush=True)
    
    gkf = GroupKFold(n_splits=5)
    spatial_r2 = []
    spatial_rmse = []
    spatial_mae = []
    
    X = df[feature_cols]
    y = df[target_col]
    groups = df["Spatial_Block_ID"]

    fold_idx = 1
    for train_idx, val_idx in gkf.split(X, y, groups):
        t0 = time.time()
        X_tr, y_tr = X.iloc[train_idx], y.iloc[train_idx]
        X_val, y_val = X.iloc[val_idx], y.iloc[val_idx]
        
        model = xgb.XGBRegressor(**xgb_params)
        model.fit(X_tr, y_tr)
        
        preds = model.predict(X_val)
        fold_r2 = r2_score(y_val, preds)
        fold_rmse = np.sqrt(mean_squared_error(y_val, preds))
        fold_mae = mean_absolute_error(y_val, preds)
        
        spatial_r2.append(fold_r2)
        spatial_rmse.append(fold_rmse)
        spatial_mae.append(fold_mae)
        
        elapsed = time.time() - t0
        print(f"Fold {fold_idx}/5: Test Samples: {len(X_val):5,d} | R2: {fold_r2:.4f} | RMSE: {fold_rmse:.4f} deg C | MAE: {fold_mae:.4f} deg C ({elapsed:.1f}s)", flush=True)
        fold_idx += 1

    mean_spatial_r2, std_spatial_r2 = np.mean(spatial_r2), np.std(spatial_r2)
    mean_spatial_rmse, std_spatial_rmse = np.mean(spatial_rmse), np.std(spatial_rmse)
    mean_spatial_mae, std_spatial_mae = np.mean(spatial_mae), np.std(spatial_mae)

    print("-" * 75, flush=True)
    print(f"Spatial Block CV Mean R2:   {mean_spatial_r2:.4f} +/- {std_spatial_r2:.4f}", flush=True)
    print(f"Spatial Block CV Mean RMSE: {mean_spatial_rmse:.4f} +/- {std_spatial_rmse:.4f} deg C", flush=True)
    print(f"Spatial Block CV Mean MAE:  {mean_spatial_mae:.4f} +/- {std_spatial_mae:.4f} deg C", flush=True)

    # -------------------------------------------------------------
    # PART B: Leave-One-City-Out (LOCO) Validation
    # -------------------------------------------------------------
    print("\n" + "=" * 75, flush=True)
    print("PART B: LEAVE-ONE-CITY-OUT (LOCO) VALIDATION", flush=True)
    print("Training on 3 cities -> evaluating entirely on the 4th unseen city.", flush=True)
    print("=" * 75, flush=True)

    loco_results = {}
    cities = list(df["City"].unique())

    for test_city in cities:
        train_cities = [c for c in cities if c != test_city]
        train_mask = df["City"].isin(train_cities)
        test_mask = df["City"] == test_city
        
        X_tr, y_tr = df.loc[train_mask, feature_cols], df.loc[train_mask, target_col]
        X_te, y_te = df.loc[test_mask, feature_cols], df.loc[test_mask, target_col]
        
        t0 = time.time()
        model = xgb.XGBRegressor(**xgb_params)
        model.fit(X_tr, y_tr)
        
        preds = model.predict(X_te)
        c_r2 = r2_score(y_te, preds)
        c_rmse = np.sqrt(mean_squared_error(y_te, preds))
        c_mae = mean_absolute_error(y_te, preds)
        elapsed = time.time() - t0
        
        loco_results[test_city] = {
            "test_samples": int(len(X_te)),
            "train_cities": train_cities,
            "r2": float(c_r2),
            "rmse": float(c_rmse),
            "mae": float(c_mae),
            "train_time": float(elapsed)
        }
        
        train_cities_str = " + ".join(train_cities)
        print(f"Train on [{train_cities_str}] -> Test on Unseen [{test_city}] ({len(X_te):,d} pts):", flush=True)
        print(f"   R2 Score:  {c_r2:.4f}", flush=True)
        print(f"   RMSE:      {c_rmse:.4f} deg C", flush=True)
        print(f"   MAE:       {c_mae:.4f} deg C  ({elapsed:.1f}s)\n", flush=True)

    loco_r2_vals = [res["r2"] for res in loco_results.values()]
    loco_rmse_vals = [res["rmse"] for res in loco_results.values()]
    loco_mae_vals = [res["mae"] for res in loco_results.values()]

    mean_loco_r2, std_loco_r2 = np.mean(loco_r2_vals), np.std(loco_r2_vals)
    mean_loco_rmse, std_loco_rmse = np.mean(loco_rmse_vals), np.std(loco_rmse_vals)
    mean_loco_mae, std_loco_mae = np.mean(loco_mae_vals), np.std(loco_mae_vals)

    print("-" * 75, flush=True)
    print("LEAVE-ONE-CITY-OUT SUMMARY (Across all 4 iterations):", flush=True)
    print(f"LOCO Mean R2:   {mean_loco_r2:.4f} +/- {std_loco_r2:.4f}", flush=True)
    print(f"LOCO Mean RMSE: {mean_loco_rmse:.4f} +/- {std_loco_rmse:.4f} deg C", flush=True)
    print(f"LOCO Mean MAE:  {mean_loco_mae:.4f} +/- {std_loco_mae:.4f} deg C", flush=True)

    # -------------------------------------------------------------
    # PART C: Export Validation Report
    # -------------------------------------------------------------
    summary_report = {
        "baseline_random_split": {
            "description": "Random 80/20 train/test split stratified by city",
            "r2": 0.8904,
            "rmse": 1.4960,
            "mae": 1.1296
        },
        "spatial_block_cv": {
            "description": "5-Fold GroupKFold on 4x4 spatial blocks per city",
            "mean_r2": float(mean_spatial_r2),
            "std_r2": float(std_spatial_r2),
            "mean_rmse": float(mean_spatial_rmse),
            "std_rmse": float(std_spatial_rmse),
            "mean_mae": float(mean_spatial_mae),
            "std_mae": float(std_spatial_mae),
            "folds": [
                {"fold": i+1, "r2": float(spatial_r2[i]), "rmse": float(spatial_rmse[i]), "mae": float(spatial_mae[i])}
                for i in range(5)
            ]
        },
        "leave_one_city_out_cv": {
            "description": "Train on 3 cities, test on 4th unseen city",
            "mean_r2": float(mean_loco_r2),
            "std_r2": float(std_loco_r2),
            "mean_rmse": float(mean_loco_rmse),
            "std_rmse": float(std_loco_rmse),
            "mean_mae": float(mean_loco_mae),
            "std_mae": float(std_loco_mae),
            "cities": loco_results
        }
    }

    ml_models_dir = os.path.join(base_dir, "models")
    backend_models_dir = os.path.join(project_root, "backend", "app", "models")
    os.makedirs(ml_models_dir, exist_ok=True)
    os.makedirs(backend_models_dir, exist_ok=True)

    json_path_ml = os.path.join(ml_models_dir, "spatial_validation_results.json")
    json_path_backend = os.path.join(backend_models_dir, "spatial_validation_results.json")

    with open(json_path_ml, "w", encoding="utf-8") as f:
        json.dump(summary_report, f, indent=2)
    with open(json_path_backend, "w", encoding="utf-8") as f:
        json.dump(summary_report, f, indent=2)

    print("\n" + "=" * 75, flush=True)
    print(f"[SUCCESS] Spatial validation results exported to:")
    print(f"   - {json_path_ml}")
    print(f"   - {json_path_backend}")
    print("=" * 75, flush=True)

if __name__ == "__main__":
    run_spatial_validation()
