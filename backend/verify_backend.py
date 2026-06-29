import subprocess
import time
import urllib.request
import urllib.error
import json
import sys

def run_verification():
    print("Starting FastAPI backend server in background...")
    # Start the server using the venv's python to run uvicorn
    proc = subprocess.Popen(
        [r".\venv\Scripts\python", "-m", "uvicorn", "app.main:app", "--port", "8000"],
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True
    )
    
    # Wait for server to start up
    time.sleep(3)
    
    # Verify GET /api/presets
    print("Verifying GET /api/presets...")
    try:
        req = urllib.request.urlopen("http://localhost:8000/api/presets")
        data = json.loads(req.read().decode('utf-8'))
        print("Success! Presets response:", data)
    except urllib.error.URLError as e:
        print("Failed to reach /api/presets:", e)
        proc.terminate()
        sys.exit(1)
        
    # Verify POST /api/predict
    print("Verifying POST /api/predict...")
    predict_payload = {
        "cell": {
            "x": 0, "y": 0, "landType": "Concrete", 
            "lst": 30.0, "ndvi": 0.1, "albedo": 0.2, "density": 0.8
        },
        "config": {
            "airTemp": 32.0, "humidity": 60.0, "windSpeed": 2.0, "solarRadiation": 800.0
        }
    }
    try:
        req = urllib.request.Request(
            "http://localhost:8000/api/predict",
            data=json.dumps(predict_payload).encode('utf-8'),
            headers={'Content-Type': 'application/json'}
        )
        with urllib.request.urlopen(req) as response:
            lst = json.loads(response.read().decode('utf-8'))
            print("Success! Predicted LST:", lst)
    except urllib.error.URLError as e:
        print("Failed to post /api/predict:", e)
        proc.terminate()
        sys.exit(1)

    # Verify POST /api/optimize
    print("Verifying POST /api/optimize...")
    optimize_payload = {
        "grid": [
            [
                {"x": 0, "y": 0, "landType": "Concrete", "lst": 38.0, "ndvi": 0.1, "albedo": 0.2, "density": 0.8},
                {"x": 0, "y": 1, "landType": "Asphalt", "lst": 40.0, "ndvi": 0.05, "albedo": 0.1, "density": 0.9}
            ]
        ],
        "config": {
            "airTemp": 32.0, "humidity": 60.0, "windSpeed": 2.0, "solarRadiation": 800.0
        },
        "budget": 20.0
    }
    try:
        req = urllib.request.Request(
            "http://localhost:8000/api/optimize",
            data=json.dumps(optimize_payload).encode('utf-8'),
            headers={'Content-Type': 'application/json'}
        )
        with urllib.request.urlopen(req) as response:
            res = json.loads(response.read().decode('utf-8'))
            print("Success! Optimization Result:", res)
    except urllib.error.URLError as e:
        print("Failed to post /api/optimize:", e)
        proc.terminate()
        sys.exit(1)

    print("All endpoints verified successfully. Terminating server process.")
    proc.terminate()
    stdout, stderr = proc.communicate(timeout=5)
    print("Server terminated successfully.")

if __name__ == "__main__":
    run_verification()
