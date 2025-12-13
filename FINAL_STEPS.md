# Quick Start - Final Steps

## Current Status ✅

- ✅ Backend Express server: RUNNING (port 5000)
- ✅ Frontend React app: RUNNING (port 3000)  
- ⏳ Python ML service: Needs model file + packages

## Step 1: Copy Model File

```bash
cp "c:/Users/admin/Desktop/pro/best_respiratory_model.pth" "c:/Users/admin/Desktop/pro/respiratory-sound-classifier/backend/python_service/best_respiratory_model.pth"
```

## Step 2: Install Missing Python Packages

```bash
cd c:/Users/admin/Desktop/pro/respiratory-sound-classifier/backend/python_service
pip install torch-geometric librosa scikit-learn flask flask-cors python-dotenv
```

## Step 3: Run Python ML Service

```bash
python predict.py
```

You should see:
```
✅ Model loaded successfully
📊 Classes: Asthma, Bronchial, COPD, Healthy, Pneumonia
🖥️  Device: cpu
 * Running on http://0.0.0.0:5001
```

## Step 4: Open the Web App

Open your browser to: **http://localhost:3000**

---

## All 3 Services Should Be Running:

1. **Terminal 1**: Python ML Service (port 5001)
2. **Terminal 2**: Express Backend (port 5000) ✅ RUNNING
3. **Terminal 3**: React Frontend (port 3000) ✅ RUNNING

---

## Test the Application

1. Go to http://localhost:3000
2. Upload a WAV file from your dataset
3. Click "Analyze Audio"
4. View the prediction results!

---

## If Model Copy is Slow

The model file is ~700KB. If copy is taking too long, you can manually:
1. Navigate to `c:\Users\admin\Desktop\pro\`
2. Copy `best_respiratory_model.pth`
3. Paste into `respiratory-sound-classifier\backend\python_service\`
