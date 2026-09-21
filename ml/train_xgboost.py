import os
import sys
import json
import time
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.metrics import r2_score, mean_squared_error, mean_absolute_error
import xgboost as xgb
import joblib

if hasattr(sys.stdout, "reconfigure"):
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
        sys.stderr.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

def train_lst_model():
    print("=" * 70, flush=True)
    print("ISRO Urban Heat Mitigation - XGBoost LST Model Training", flush=True)
    print("=" * 70, flush=True)

    base_dir = os.path.dirname(os.path.abspath(__file__))
    project_root = os.path.dirname(base_dir)
    
    # 1. Load the final dataset with morphology features
    dataset_path = os.path.join(base_dir, "Final_ML_Dataset_With_Morphology.csv")
    if not os.path.exists(dataset_path):
        dataset_path = os.path.join(project_root, "Final_ML_Dataset_With_Morphology.csv")
        
    if not os.path.exists(dataset_path):
        print(f"[ERROR] Dataset not found at: {dataset_path}", flush=True)
        return
        
    print(f"Loading dataset from: {dataset_path}", flush=True)
    df = pd.read_csv(dataset_path)
    print(f"Dataset loaded successfully. Total rows: {len(df):,}, Total columns: {len(df.columns)}", flush=True)
    
    # 2. Define Features and Target
    target_col = "LST"
    
    feature_cols = [
        # Remote Sensing Features
        "NDVI", "S2_NDVI", "NDBI", "NDWI", "LULC", "DistToVeg", "GHSL", "DEM",
        # Meteorological Features
        "AirTemp", "RH", "WindSpeed",
        # Urban Morphology Features
        "Building_Density", "Building_Coverage_Ratio", "Mean_Building_Area",
        "Road_Density", "Distance_to_Road", "Impervious_Surface_Ratio",
        "Intersection_Density", "Park_Coverage_Ratio", "Distance_to_Park",
        "Water_Coverage_Ratio", "Distance_to_Water", "Forest_Coverage_Ratio",
        "Distance_to_Forest"
    ]
    
    print(f"\nUsing {len(feature_cols)} predictor features to model {target_col}:", flush=True)
    for i, col in enumerate(feature_cols, 1):
        print(f"  {i:2d}. {col}", flush=True)
        
    X = df[feature_cols].copy()
    y = df[target_col].copy()
    cities = df["City"].copy()
    
    # 3. Train / Test Split (80% Train, 20% Test, stratified by City)
    print("\nSplitting dataset: 80% Train, 20% Test (stratified by City)...", flush=True)
    X_train, X_test, y_train, y_test, city_train, city_test = train_test_split(
        X, y, cities, test_size=0.20, random_state=42, stratify=cities
    )
    print(f"Train set: {len(X_train):,} samples", flush=True)
    print(f"Test set:  {len(X_test):,} samples", flush=True)
    
    # 4. Train XGBoost Regressor
    print("\nTraining XGBoost Regressor...", flush=True)
    t0 = time.time()
    
    model = xgb.XGBRegressor(
        n_estimators=500,
        learning_rate=0.05,
        max_depth=6,
        subsample=0.8,
        colsample_bytree=0.8,
        min_child_weight=3,
        gamma=0.1,
        random_state=42,
        n_jobs=-1
    )
    
    model.fit(
        X_train, y_train,
        eval_set=[(X_train, y_train), (X_test, y_test)],
        verbose=100
    )
    
    train_time = time.time() - t0
    print(f"XGBoost model training completed in {train_time:.1f} seconds.", flush=True)
    
    # 5. Evaluate Model
    y_pred_train = model.predict(X_train)
    y_pred_test = model.predict(X_test)
    
    r2_train = r2_score(y_train, y_pred_train)
    r2_test = r2_score(y_test, y_pred_test)
    rmse_test = np.sqrt(mean_squared_error(y_test, y_pred_test))
    mae_test = mean_absolute_error(y_test, y_pred_test)
    
    print("\n" + "=" * 70, flush=True)
    print("MODEL EVALUATION RESULTS (OVERALL)", flush=True)
    print("=" * 70, flush=True)
    print(f"Train R2 Score: {r2_train:.4f}", flush=True)
    print(f"Test R2 Score:  {r2_test:.4f}", flush=True)
    print(f"Test RMSE:      {rmse_test:.4f} °C", flush=True)
    print(f"Test MAE:       {mae_test:.4f} °C", flush=True)
    
    # City-wise breakdown
    print("\n" + "-" * 70, flush=True)
    print("CITY-WISE TEST PERFORMANCE BREAKDOWN", flush=True)
    print("-" * 70, flush=True)
    print(f"{'City':<15} {'Samples':<10} {'R2 Score':<12} {'RMSE (°C)':<12} {'MAE (°C)':<10}", flush=True)
    print("-" * 70, flush=True)
    
    test_df_eval = pd.DataFrame({
        "City": city_test.values,
        "y_true": y_test.values,
        "y_pred": y_pred_test
    })
    
    for city_name, group in test_df_eval.groupby("City"):
        c_r2 = r2_score(group["y_true"], group["y_pred"])
        c_rmse = np.sqrt(mean_squared_error(group["y_true"], group["y_pred"]))
        c_mae = mean_absolute_error(group["y_true"], group["y_pred"])
        print(f"{city_name:<15} {len(group):<10,} {c_r2:<12.4f} {c_rmse:<12.4f} {c_mae:<10.4f}", flush=True)
    print("-" * 70, flush=True)
    
    # 6. Feature Importance
    importance_dict = model.get_booster().get_score(importance_type="gain")
    imp_df = pd.DataFrame([
        {"Feature": feat, "Importance_Gain": importance_dict.get(feat, 0.0)}
        for feat in feature_cols
    ]).sort_values(by="Importance_Gain", ascending=False)
    
    total_gain = imp_df["Importance_Gain"].sum()
    imp_df["Importance_Pct"] = (imp_df["Importance_Gain"] / total_gain) * 100
    
    print("\n" + "=" * 70, flush=True)
    print("KEY DRIVERS OF URBAN HEATING (FEATURE IMPORTANCE - GAIN %)", flush=True)
    print("=" * 70, flush=True)
    for rank, (_, row) in enumerate(imp_df.iterrows(), 1):
        bar = "#" * int(row["Importance_Pct"])
        print(f"{rank:2d}. {row['Feature']:.<28} {row['Importance_Pct']:5.2f}% {bar}", flush=True)
    print("=" * 70, flush=True)
    
    # 7. Save Model & Artifacts
    ml_models_dir = os.path.join(base_dir, "models")
    backend_models_dir = os.path.join(project_root, "backend", "app", "models")
    os.makedirs(ml_models_dir, exist_ok=True)
    os.makedirs(backend_models_dir, exist_ok=True)
    
    # Save JSON booster
    model.save_model(os.path.join(ml_models_dir, "xgboost_lst_model.json"))
    model.save_model(os.path.join(backend_models_dir, "xgboost_lst_model.json"))
    
    # Save Joblib
    joblib.dump(model, os.path.join(ml_models_dir, "xgboost_lst_model.joblib"))
    joblib.dump(model, os.path.join(backend_models_dir, "xgboost_lst_model.joblib"))
    
    # Save Feature Columns metadata
    feature_meta = {
        "target": target_col,
        "features": feature_cols,
        "metrics": {
            "r2_train": float(r2_train),
            "r2_test": float(r2_test),
            "rmse_test": float(rmse_test),
            "mae_test": float(mae_test)
        }
    }
    with open(os.path.join(ml_models_dir, "feature_columns.json"), "w") as f:
        json.dump(feature_meta, f, indent=2)
    with open(os.path.join(backend_models_dir, "feature_columns.json"), "w") as f:
        json.dump(feature_meta, f, indent=2)
        
    # Save Feature Importance CSV
    imp_df.to_csv(os.path.join(ml_models_dir, "feature_importance.csv"), index=False)
    imp_df.to_csv(os.path.join(backend_models_dir, "feature_importance.csv"), index=False)
    
    print("\n[SUCCESS] Model and metadata saved to:", flush=True)
    print(f"  - {ml_models_dir}", flush=True)
    print(f"  - {backend_models_dir}", flush=True)

if __name__ == "__main__":
    train_lst_model()
