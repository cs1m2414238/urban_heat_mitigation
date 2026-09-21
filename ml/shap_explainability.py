import os
import sys
import json
import time
import pandas as pd
import numpy as np
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import xgboost as xgb
import shap

if hasattr(sys.stdout, "reconfigure"):
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
        sys.stderr.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

def run_shap_analysis():
    print("=" * 75, flush=True)
    print("ISRO Urban Heat Mitigation - SHAP Model Interpretability Pipeline", flush=True)
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

    print(f"Loading trained XGBoost model: {model_path}", flush=True)
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

    # Sample a stratified, balanced subset for SHAP computation (2,500 samples per city = 10,000 samples)
    print("\nExtracting stratified sample of 10,000 points (2,500 per city) for TreeSHAP...", flush=True)
    sample_dfs = []
    for city in df["City"].unique():
        c_df = df[df["City"] == city]
        n_sample = min(2500, len(c_df))
        sample_dfs.append(c_df.sample(n=n_sample, random_state=42))
    sample_df = pd.concat(sample_dfs, ignore_index=True)

    X_sample = sample_df[feature_cols]
    y_sample = sample_df["LST"]

    print("Initializing TreeExplainer and calculating SHAP values...", flush=True)
    t0 = time.time()
    explainer = shap.TreeExplainer(model)
    shap_values = explainer(X_sample)
    print(f"SHAP values calculated in {time.time() - t0:.1f}s.", flush=True)

    shap_matrix = shap_values.values  # Shape: (N, num_features)

    # -------------------------------------------------------------
    # 1. Global Feature Importance (mean |SHAP| in °C)
    # -------------------------------------------------------------
    mean_abs_shap = np.mean(np.abs(shap_matrix), axis=0)
    global_shap_df = pd.DataFrame({
        "Feature": feature_cols,
        "Mean_Abs_SHAP_degC": mean_abs_shap
    }).sort_values(by="Mean_Abs_SHAP_degC", ascending=False)
    
    total_shap = global_shap_df["Mean_Abs_SHAP_degC"].sum()
    global_shap_df["Relative_Contribution_Pct"] = (global_shap_df["Mean_Abs_SHAP_degC"] / total_shap) * 100

    print("\n" + "=" * 75, flush=True)
    print("GLOBAL SHAP FEATURE IMPORTANCE")
    print("Definition: Average magnitude of feature contribution to model prediction (deg C)")
    print("=" * 75, flush=True)
    for rank, (_, row) in enumerate(global_shap_df.iterrows(), 1):
        bar = "#" * int(row["Mean_Abs_SHAP_degC"] * 8)
        print(f"{rank:2d}. {row['Feature']:.<28} {row['Mean_Abs_SHAP_degC']:6.3f} deg C ({row['Relative_Contribution_Pct']:5.2f}%) {bar}", flush=True)
    print("=" * 75, flush=True)

    # -------------------------------------------------------------
    # 2. City-Specific Top Drivers (mean |SHAP|)
    # -------------------------------------------------------------
    print("\n" + "-" * 75, flush=True)
    print("CITY-SPECIFIC TOP SHAP DRIVERS (deg C Impact Magnitude)")
    print("-" * 75, flush=True)

    city_shap_data = []
    for city in sample_df["City"].unique():
        city_mask = (sample_df["City"] == city).values
        city_shap_vals = np.mean(np.abs(shap_matrix[city_mask]), axis=0)
        c_df = pd.DataFrame({
            "City": city,
            "Feature": feature_cols,
            "Mean_Abs_SHAP_degC": city_shap_vals
        }).sort_values(by="Mean_Abs_SHAP_degC", ascending=False)
        
        print(f"\nTop 5 Drivers for [{city}]:", flush=True)
        for i, (_, row) in enumerate(c_df.head(5).iterrows(), 1):
            print(f"  {i}. {row['Feature']:.<25} {row['Mean_Abs_SHAP_degC']:.3f} deg C", flush=True)
            city_shap_data.append(row.to_dict())

    city_shap_df = pd.DataFrame(city_shap_data)

    # -------------------------------------------------------------
    # 3. Local Hotspot vs. Cool Refuge Archetypes
    # -------------------------------------------------------------
    # Find extreme hotspot (highest predicted LST)
    preds = model.predict(X_sample)
    sample_df["Predicted_LST"] = preds
    
    hotspot_idx = sample_df["Predicted_LST"].idxmax()
    hotspot_row = sample_df.loc[hotspot_idx]
    hotspot_shap = shap_matrix[sample_df.index.get_loc(hotspot_idx)]

    # Find cool refuge (lowest predicted LST in urban region)
    cool_idx = sample_df["Predicted_LST"].idxmin()
    cool_row = sample_df.loc[cool_idx]
    cool_shap = shap_matrix[sample_df.index.get_loc(cool_idx)]

    base_value = float(explainer.expected_value)

    def extract_local_explanation(row, shap_vals, label):
        pos_contribs = []
        neg_contribs = []
        for feat, val, sh in zip(feature_cols, row[feature_cols], shap_vals):
            entry = {"feature": feat, "feature_value": float(val), "shap_impact_degC": round(float(sh), 3)}
            if sh >= 0:
                pos_contribs.append(entry)
            else:
                neg_contribs.append(entry)
        
        pos_contribs.sort(key=lambda x: x["shap_impact_degC"], reverse=True)
        neg_contribs.sort(key=lambda x: x["shap_impact_degC"])
        
        return {
            "archetype": label,
            "city": row["City"],
            "latitude": float(row["Latitude"]),
            "longitude": float(row["Longitude"]),
            "actual_lst": float(row["LST"]),
            "predicted_lst": float(row["Predicted_LST"]),
            "base_value_lst": base_value,
            "warming_drivers_top": pos_contribs[:5],
            "cooling_drivers_top": neg_contribs[:5]
        }

    hotspot_expl = extract_local_explanation(hotspot_row, hotspot_shap, "Severe Urban Heat Hotspot")
    cool_expl = extract_local_explanation(cool_row, cool_shap, "Urban Cool Refuge")

    print("\n" + "=" * 75, flush=True)
    print("LOCAL HOTSPOT ATTRIBUTION (Sample Point)", flush=True)
    print(f"City: {hotspot_expl['city']} | Actual LST: {hotspot_expl['actual_lst']:.2f} deg C | Predicted: {hotspot_expl['predicted_lst']:.2f} deg C")
    print("Top Warming Push Drivers (increases predicted LST):", flush=True)
    for d in hotspot_expl["warming_drivers_top"]:
        print(f"   +{d['shap_impact_degC']:.2f} deg C <-- {d['feature']} (value: {d['feature_value']:.2f})", flush=True)
    print("=" * 75, flush=True)

    # -------------------------------------------------------------
    # 4. Generate SHAP Summary & Dependence Visualizations
    # -------------------------------------------------------------
    ml_shap_dir = os.path.join(base_dir, "models", "shap")
    backend_shap_dir = os.path.join(project_root, "backend", "app", "models", "shap")
    os.makedirs(ml_shap_dir, exist_ok=True)
    os.makedirs(backend_shap_dir, exist_ok=True)

    # Plot 1: Global Bar Summary
    plt.figure(figsize=(10, 8))
    top_15 = global_shap_df.head(15).iloc[::-1]
    plt.barh(top_15["Feature"], top_15["Mean_Abs_SHAP_degC"], color="#d9534f", edgecolor="black", alpha=0.85)
    plt.xlabel("Mean Absolute SHAP Value (Impact magnitude on LST in °C)", fontsize=11, fontweight="bold")
    plt.title("ISRO Urban Heat Mitigation - Top Predictor Influences (SHAP)", fontsize=13, fontweight="bold")
    plt.tight_layout()
    bar_path = os.path.join(ml_shap_dir, "shap_summary_bar.png")
    plt.savefig(bar_path, dpi=200)
    plt.close()

    # Plot 2: Key Drivers Dependence Plots
    key_features = ["NDBI", "NDVI", "DistToVeg", "Impervious_Surface_Ratio", "Building_Coverage_Ratio", "Distance_to_Water", "AirTemp"]
    
    for feat in ["NDBI", "NDVI"]:
        feat_idx = feature_cols.index(feat)
        plt.figure(figsize=(8, 5))
        plt.scatter(X_sample[feat], shap_matrix[:, feat_idx], c=sample_df["LST"], cmap="coolwarm", alpha=0.4, s=15)
        plt.colorbar(label="Actual LST (°C)")
        plt.axhline(0, color="gray", linestyle="--", linewidth=0.8)
        plt.xlabel(f"{feat} Value", fontsize=11, fontweight="bold")
        plt.ylabel(f"SHAP Value for {feat} (°C impact)", fontsize=11, fontweight="bold")
        plt.title(f"SHAP Dependence Curve: {feat} Response", fontsize=12, fontweight="bold")
        plt.tight_layout()
        dep_path = os.path.join(ml_shap_dir, f"shap_dependence_{feat.lower()}.png")
        plt.savefig(dep_path, dpi=200)
        plt.close()

    # -------------------------------------------------------------
    # 5. Export Data Files (CSV / JSON)
    # -------------------------------------------------------------
    # Global CSV
    global_shap_df.to_csv(os.path.join(ml_shap_dir, "global_shap_importance.csv"), index=False)
    global_shap_df.to_csv(os.path.join(backend_shap_dir, "global_shap_importance.csv"), index=False)

    # City CSV
    city_shap_df.to_csv(os.path.join(ml_shap_dir, "city_shap_importance.csv"), index=False)
    city_shap_df.to_csv(os.path.join(backend_shap_dir, "city_shap_importance.csv"), index=False)

    # Local Explanations JSON
    local_explanations = {
        "hotspot": hotspot_expl,
        "cool_refuge": cool_expl,
        "definition": "Mean absolute SHAP value represents the average magnitude of that feature's contribution to the model prediction."
    }
    with open(os.path.join(ml_shap_dir, "local_explanations.json"), "w", encoding="utf-8") as f:
        json.dump(local_explanations, f, indent=2)
    with open(os.path.join(backend_shap_dir, "local_explanations.json"), "w", encoding="utf-8") as f:
        json.dump(local_explanations, f, indent=2)

    print("\n[SUCCESS] SHAP explainability artifacts generated and saved to:")
    print(f"   - {ml_shap_dir}")
    print(f"   - {backend_shap_dir}", flush=True)

if __name__ == "__main__":
    run_shap_analysis()
