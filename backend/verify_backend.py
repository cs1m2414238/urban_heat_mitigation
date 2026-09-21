import subprocess
import time
import urllib.request
import urllib.error
import json
import sys

def run_verification():
    sys.stdout.reconfigure(encoding='utf-8')
    print("Starting FastAPI backend server in background...")
    proc = subprocess.Popen(
        [sys.executable, "-m", "uvicorn", "app.main:app", "--port", "8000"],
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
        encoding='utf-8'
    )
    
    # Wait for server with retries (up to 15s)
    connected = False
    for i in range(15):
        time.sleep(1)
        try:
            req = urllib.request.urlopen("http://localhost:8000/api/model/metrics")
            connected = True
            break
        except Exception:
            pass

    if not connected:
        print("[ERROR] Server failed to respond within 15 seconds.")
        proc.terminate()
        stdout, stderr = proc.communicate(timeout=5)
        print("--- STDOUT ---")
        print(stdout)
        print("--- STDERR ---")
        print(stderr)
        sys.exit(1)
    
    try:
        # 1. Verify GET /api/model/metrics
        print("\n1. Verifying GET /api/model/metrics...")
        req = urllib.request.urlopen("http://localhost:8000/api/model/metrics")
        metrics = json.loads(req.read().decode('utf-8'))
        assert "baseline_random_split" in metrics
        assert "spatial_block_cv" in metrics
        assert "leave_one_city_out_cv" in metrics
        print(f"   [SUCCESS] Metrics loaded: Random R2={metrics['baseline_random_split']['r2']:.4f}, Spatial Block Mean R2={metrics['spatial_block_cv']['mean_r2']:.4f}")

        # 2. Verify GET /api/model/drivers
        print("\n2. Verifying GET /api/model/drivers...")
        req = urllib.request.urlopen("http://localhost:8000/api/model/drivers")
        drivers = json.loads(req.read().decode('utf-8'))
        assert "global_shap_importance" in drivers
        top_driver = drivers["global_shap_importance"][0]
        print(f"   [SUCCESS] SHAP Drivers loaded. Top Driver: {top_driver['Feature']} (Impact: {top_driver['Mean_Abs_SHAP_degC']:.3f}°C, {top_driver['Relative_Contribution_Pct']:.1f}%)")

        # 3. Verify GET /api/hotspots (Delhi, limit=5)
        print("\n3. Verifying GET /api/hotspots (city=Delhi)...")
        req = urllib.request.urlopen("http://localhost:8000/api/hotspots?city=Delhi&limit=5")
        hs_data = json.loads(req.read().decode('utf-8'))
        assert hs_data["type"] == "FeatureCollection"
        assert hs_data["total_matching"] == 5001
        assert hs_data["returned_count"] == 5
        assert len(hs_data["features"]) == 5
        first_hs = hs_data["features"][0]
        assert 75 <= first_hs["properties"]["city_percentile"] <= 100
        first_id = first_hs["properties"]["id"]
        print(f"   [SUCCESS] Loaded {len(hs_data['features'])} hotspots. First: {first_id} (LST: {first_hs['properties']['lst']}°C, Severity: {first_hs['properties']['severity']})")

        # Verify the complete thermal field is distinct from the P75+ hotspot set
        print("\n3b. Verifying GET /api/thermal-field (Delhi)...")
        req = urllib.request.urlopen("http://localhost:8000/api/thermal-field?city=Delhi&limit=25")
        field_data = json.loads(req.read().decode('utf-8'))
        assert field_data["type"] == "FeatureCollection"
        assert field_data["total_matching"] == 20000
        assert field_data["returned_count"] == 25
        assert len(field_data["features"]) == 25
        bands = {feature["properties"]["temperature_band"] for feature in field_data["features"]}
        assert bands
        for feature in field_data["features"]:
            lst = feature["properties"]["lst"]
            expected_band = (
                "Critical" if lst > 45 else
                "Severe" if lst >= 42 else
                "High" if lst >= 39 else
                "Moderate" if lst >= 36 else
                "Cool / Baseline"
            )
            assert feature["properties"]["temperature_band"] == expected_band
        print(f"   [SUCCESS] Complete Delhi field available: {field_data['total_matching']:,} samples")

        # 4. Verify GET /api/hotspots/{id}
        print(f"\n4. Verifying GET /api/hotspots/{first_id}...")
        req = urllib.request.urlopen(f"http://localhost:8000/api/hotspots/{first_id}")
        single_hs = json.loads(req.read().decode('utf-8'))
        assert single_hs["properties"]["id"] == first_id
        print(f"   [SUCCESS] Successfully fetched details for {first_id}")

        # 5. Verify POST /api/simulate-intervention
        print("\n5. Verifying POST /api/simulate-intervention...")
        interv_payload = {
            "hotspot_id": first_id,
            "intervention_type": "urban_greening",
            "intensity": 0.25
        }
        req = urllib.request.Request(
            "http://localhost:8000/api/simulate-intervention",
            data=json.dumps(interv_payload).encode('utf-8'),
            headers={'Content-Type': 'application/json'}
        )
        with urllib.request.urlopen(req) as resp:
            interv_res = json.loads(resp.read().decode('utf-8'))
            print(f"   [SUCCESS] Simulation complete: Baseline {interv_res['baseline_lst']:.2f}°C -> Scenario {interv_res['scenario_lst']:.2f}°C (Cooling: -{interv_res['cooling_effect_degC']:.2f}°C)")
            print(f"   Coupled shifts: {interv_res['coupled_feature_changes']}")

        # 6. Verify POST /api/predict (Legacy & point prediction)
        print("\n6. Verifying POST /api/predict...")
        predict_payload = {
            "cell": {
                "x": 0, "y": 0, "landType": "Concrete", 
                "lst": 35.0, "ndvi": 0.12, "albedo": 0.2, "density": 0.8
            },
            "config": {
                "airTemp": 33.0, "humidity": 60.0, "windSpeed": 2.0, "solarRadiation": 800.0
            }
        }
        req = urllib.request.Request(
            "http://localhost:8000/api/predict",
            data=json.dumps(predict_payload).encode('utf-8'),
            headers={'Content-Type': 'application/json'}
        )
        with urllib.request.urlopen(req) as resp:
            pred_lst = json.loads(resp.read().decode('utf-8'))
            print(f"   [SUCCESS] Predicted LST: {pred_lst}°C")

        print("\n========================================================")
        print("[ALL TESTS PASSED] Backend API integration is 100% verified.")
        print("========================================================")

    except Exception as e:
        print(f"\n[ERROR] Verification failed: {e}")
        proc.terminate()
        sys.exit(1)
    finally:
        print("\nTerminating backend test server...")
        proc.terminate()
        try:
            proc.communicate(timeout=5)
        except Exception:
            proc.kill()
        print("[OK] Test server stopped.")

if __name__ == "__main__":
    run_verification()
