# 🫁 GNN-Powered Respiratory Disease Detection

<div align="center">

![Python](https://img.shields.io/badge/Python-3.8%2B-blue)
![PyTorch](https://img.shields.io/badge/PyTorch-2.0%2B-red)
![License](https://img.shields.io/badge/License-MIT-green)
![Accuracy](https://img.shields.io/badge/Accuracy-95.47%25-brightgreen)

**Advanced AI-powered system for multi-class respiratory sound classification using Graph Neural Networks**

[Features](#-features) • [Installation](#-installation) • [Usage](#-usage) • [Model Architecture](#-model-architecture) • [Results](#-results)

</div>

---

## 📋 Overview

This project implements a state-of-the-art **Graph Neural Network (GNN)** for classifying respiratory sounds into five categories:

- ✅ **Healthy**
- 🫁 **Asthma**
- 🌬️ **COPD** (Chronic Obstructive Pulmonary Disease)
- 🦠 **Pneumonia**
- 💨 **Bronchial** conditions

The system achieves an impressive **95.47% accuracy** on test data, leveraging advanced audio feature extraction and graph-based representation learning.

---

## 🌟 Features

### 🎯 Core Capabilities
- **Multi-class Classification**: Accurately identifies 5 different respiratory conditions
- **Graph Neural Network Architecture**: Novel approach using GNN for audio classification
- **Comprehensive Feature Extraction**: 76-dimensional feature vector including:
  - MFCCs (Mel-Frequency Cepstral Coefficients)
  - Spectral features (centroid, rolloff, contrast, bandwidth)
  - Temporal features (zero-crossing rate, RMS energy)
  - Chroma features
  - Mel spectrograms

### 🚀 Advanced Features
- **Real-time Prediction**: Fast inference on audio files
- **Cross-Validation Support**: K-fold validation for robust model evaluation
- **Detailed Analytics**: Confusion matrices and performance metrics
- **Production-Ready**: Easy-to-use prediction interface

---

## 🏗️ Project Structure

```
respiratory-sound-classifier/
├── 📂 backend/
│   ├── server.js                          # Express server
│   ├── package.json
│   ├── 📂 uploads/                        # Temporary file storage
│   └── 📂 python_service/
│       ├── predict.py                     # Flask ML API
│       ├── requirements.txt
│       └── best_respiratory_model.pth     # Trained model
│
├── 📂 frontend/
│   ├── 📂 public/
│   │   └── index.html
│   ├── 📂 src/
│   │   ├── App.js                         # Main component
│   │   ├── App.css
│   │   ├── index.js
│   │   └── 📂 components/
│   │       ├── FileUpload.js
│   │       └── ResultsDisplay.js
│   └── package.json
│
├── 📂 saved_models/                        # Model checkpoints
│   └── respiratory_model_YYYYMMDD_HHMMSS/
│       ├── model.pth
│       ├── metadata.json
│       └── label_encoder.pkl
│
├── 📓 model_trained.ipynb                  # Training notebook
└── 📄 README.md
```

---

## 🔧 Installation

### Prerequisites
- Python 3.8+
- Node.js 16+
- npm or yarn

### 1️⃣ Backend Setup

```bash
# Navigate to backend directory
cd backend
npm install
```

### 2️⃣ Python ML Service Setup

```bash
# Navigate to Python service
cd backend/python_service

# Install dependencies
pip install -r requirements.txt

# Verify model file exists
ls best_respiratory_model.pth
```

**Important**: Ensure `best_respiratory_model.pth` is in the `backend/python_service/` directory.

### 3️⃣ Frontend Setup

```bash
# Navigate to frontend
cd frontend
npm install
```

---

## 🚀 Running the Application

You need **3 separate terminals** for the complete stack:

### Terminal 1: Python ML Service
```bash
cd backend/python_service
python predict.py
```
🟢 Server runs on: `http://localhost:5001`

### Terminal 2: Express Backend
```bash
cd backend
npm start
```
🟢 Server runs on: `http://localhost:5000`

### Terminal 3: React Frontend
```bash
cd frontend
npm start
```
🟢 Application opens at: `http://localhost:3000`

---

## 📊 Model Architecture

### Graph Neural Network Details

```python
MultiClassRespiratoryGNN(
    input_dim=76,      # Feature dimensions
    hidden_dim=128,    # Hidden layer size
    num_classes=5,     # Output classes
    dropout=0.5        # Regularization
)
```

**Architecture Flow**:
```
Audio Input → Feature Extraction (76 features) → 
Graph Construction (K-NN) → 
GCN Layers (4 layers with residual connections) → 
Global Pooling → 
Classification Head → 
5-Class Output
```

### Key Components

1. **Feature Extraction Pipeline**
   - Audio preprocessing (16kHz, 5-second segments)
   - Comprehensive feature computation
   - Normalization and augmentation

2. **Graph Construction**
   - K-Nearest Neighbors (k=5)
   - Temporal connectivity preservation
   - Dynamic edge creation

3. **GNN Layers**
   - 4 Graph Convolutional layers
   - Batch normalization
   - Residual connections
   - Dropout regularization

4. **Classification Head**
   - Dense layers with ReLU activation
   - Multi-class softmax output
   - Confidence scoring

---

## 📈 Results

### Performance Metrics

| Class      | Precision | Recall | F1-Score | Support |
|------------|-----------|--------|----------|---------|
| Asthma     | 0.875     | 0.966  | 0.918    | 58      |
| Bronchial  | 0.944     | 0.810  | 0.872    | 21      |
| **COPD**   | **1.000** | **0.963** | **0.981** | 81   |
| Healthy    | 0.931     | 1.000  | 0.964    | 27      |
| Pneumonia  | 1.000     | 0.965  | 0.982    | 57      |

**Overall Metrics**:
- ✅ **Accuracy**: 95.47%
- ✅ **Macro Avg F1**: 0.943
- ✅ **Weighted Avg F1**: 0.955

### Training Performance

- **Dataset**: 1,211 audio samples
- **Training Split**: 80/20
- **Best Test Accuracy**: 95.47%
- **Parameters**: 58,629 trainable
- **Training Time**: ~50 epochs (early stopping)

### Cross-Validation Results

5-Fold CV Mean Accuracy: **91.00% ± 1.32%**

---

## 💻 Usage

### Web Application

1. Open `http://localhost:3000` in your browser
2. Upload a WAV audio file (drag-and-drop or click to browse)
3. Click "Analyze Audio"
4. View prediction results with confidence scores

### Python API

```python
from simple_predictor import SimpleRespiratoryPredictor

# Initialize predictor
predictor = SimpleRespiratoryPredictor('saved_models/respiratory_model_...')

# Make prediction
result = predictor.predict_audio_file('path/to/audio.wav')

print(f"Prediction: {result['prediction']}")
print(f"Confidence: {result['confidence']:.2%}")
```

### Training Your Own Model

```python
from model_trained import main_training_pipeline

# Train model
pipeline, history, report = main_training_pipeline('path/to/dataset')

# View results
print(f"Best Accuracy: {history['best_accuracy']:.4f}")
```

---

## 📦 Supported Audio Format

| Parameter      | Value           |
|----------------|-----------------|
| Format         | WAV             |
| Sample Rate    | 16000 Hz (auto) |
| Duration       | 5 seconds (auto)|
| Max File Size  | 50 MB           |

---

## 🔬 Technical Details

### Feature Engineering

**76-dimensional feature vector** composed of:
- 13 MFCCs + deltas + delta-deltas (39 features)
- Spectral features (4 features)
- Zero-crossing rate (1 feature)
- Chroma features (12 features)
- Mel spectrogram (13 features)
- RMS energy (1 feature)
- Spectral contrast (7 features)

### Graph Construction

- **Node**: Each time frame (157 frames per sample)
- **Edges**: K-nearest neighbors (k=5) based on feature similarity
- **Connectivity**: Bidirectional edges for undirected graph

---

## ⚠️ Medical Disclaimer

> **IMPORTANT**: This application is for **research and educational purposes only**. 
> 
> ❌ Do NOT use as a substitute for professional medical diagnosis
> 
> ✅ Always consult qualified healthcare providers for medical advice

---

## 🛠️ Troubleshooting

### Common Issues

**Backend connection error**
- Ensure all 3 services are running
- Check ports 3000, 5000, 5001 are available

**Model not loading**
- Verify `best_respiratory_model.pth` is in `backend/python_service/`
- Check Python dependencies are installed

**File upload fails**
- Ensure file is in WAV format
- Check file size is under 50MB
- Verify backend server is running

---

## 📡 API Endpoints

### Backend (Express)
- `GET /api/health` - Health check
- `POST /api/upload` - Upload and analyze audio file

### Python ML Service
- `GET /health` - Health check
- `POST /predict` - Get prediction for audio file

---

## 🔗 Technologies Used

| Category | Technologies |
|----------|-------------|
| **Frontend** | React, Axios, Recharts |
| **Backend** | Express.js, Multer, CORS |
| **ML** | PyTorch, PyTorch Geometric, Librosa, Flask |
| **Audio** | Librosa, NumPy, SciPy |

---

## 📊 Dataset Information

- **Total Samples**: 1,211 audio files
- **Classes**: 5 (Healthy, Asthma, COPD, Pneumonia, Bronchial)
- **Class Distribution**:
  - COPD: 401 files (33.1%)
  - Asthma: 288 files (23.8%)
  - Pneumonia: 285 files (23.5%)
  - Healthy: 133 files (11.0%)
  - Bronchial: 104 files (8.6%)

---

## 🔐 Security Considerations

- Files are temporarily stored and deleted after processing
- CORS enabled for local development only
- File type and size validation implemented
- No sensitive data stored permanently

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Your Name**
- GitHub: [[Gurumurthys1](https://github.com/Gurumurthys1)]

---

## 🙏 Acknowledgments

- Thanks to the respiratory sound dataset providers
- PyTorch Geometric team for the excellent GNN framework
- Librosa for comprehensive audio processing tools

---


<div align="center">


⭐ **Star this repo if you find it helpful!** ⭐

</div>
