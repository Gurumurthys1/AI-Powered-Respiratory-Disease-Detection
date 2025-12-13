# Respiratory Sound Classification - MERN Stack Application

AI-powered web application for classifying respiratory sounds into 5 categories: Healthy, Asthma, COPD, Pneumonia, and Bronchial conditions.

## 🏗️ Architecture

- **Frontend**: React.js with modern UI/UX
- **Backend**: Express.js (Node.js)
- **ML Service**: Python Flask + PyTorch
- **Model**: Graph Neural Network (GNN) with 95.47% accuracy

## 📋 Prerequisites

- Node.js (v16 or higher)
- Python 3.8+
- npm or yarn

## 🚀 Installation & Setup

### 1. Backend Setup

```bash
cd backend
npm install
```

### 2. Python ML Service Setup

```bash
cd backend/python_service
pip install -r requirements.txt
```

**Important**: Ensure `best_respiratory_model.pth` is in the `backend/python_service/` directory.

### 3. Frontend Setup

```bash
cd frontend
npm install
```

## ▶️ Running the Application

You need to run **3 services** in separate terminals:

### Terminal 1: Python ML Service
```bash
cd backend/python_service
python predict.py
```
Server runs on: `http://localhost:5001`

### Terminal 2: Express Backend
```bash
cd backend
npm start
```
Server runs on: `http://localhost:5000`

### Terminal 3: React Frontend
```bash
cd frontend
npm start
```
Application opens at: `http://localhost:3000`

## 🎯 Usage

1. Open `http://localhost:3000` in your browser
2. Upload a WAV audio file (drag-and-drop or click to browse)
3. Click "Analyze Audio"
4. View the prediction results with confidence scores

## 📁 Project Structure

```
respiratory-sound-classifier/
├── backend/
│   ├── server.js              # Express server
│   ├── package.json
│   ├── uploads/               # Temporary file storage
│   └── python_service/
│       ├── predict.py         # Flask ML API
│       ├── requirements.txt
│       └── best_respiratory_model.pth
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js            # Main component
│   │   ├── App.css           # Styling
│   │   ├── index.js
│   │   └── components/
│   │       ├── FileUpload.js
│   │       └── ResultsDisplay.js
│   └── package.json
└── README.md
```

## 🔬 Model Information

- **Architecture**: Graph Neural Network (GNN)
- **Input**: 76 audio features (MFCCs, spectral features, etc.)
- **Output**: 5 classes (Healthy, Asthma, COPD, Pneumonia, Bronchial)
- **Accuracy**: 95.47% on test set
- **Parameters**: 58,629 trainable parameters

## 🎨 Features

- ✅ Drag-and-drop file upload
- ✅ Real-time audio analysis
- ✅ Confidence score visualization
- ✅ Probability distribution charts
- ✅ Responsive design
- ✅ Error handling
- ✅ Loading states

## ⚠️ Medical Disclaimer

This application is for **research and educational purposes only**. It should not be used as a substitute for professional medical diagnosis. Always consult qualified healthcare providers for medical advice.

## 🐛 Troubleshooting

### Backend connection error
- Ensure all 3 services are running
- Check that ports 3000, 5000, and 5001 are available

### Model not loading
- Verify `best_respiratory_model.pth` is in `backend/python_service/`
- Check Python dependencies are installed

### File upload fails
- Ensure file is in WAV format
- Check file size is under 50MB
- Verify backend server is running

## 📝 API Endpoints

### Backend (Express)
- `GET /api/health` - Health check
- `POST /api/upload` - Upload and analyze audio file

### Python ML Service
- `GET /health` - Health check
- `POST /predict` - Get prediction for audio file

## 🛠️ Technologies Used

- **Frontend**: React, Axios, Recharts
- **Backend**: Express.js, Multer, CORS
- **ML**: PyTorch, PyTorch Geometric, Librosa, Flask
- **Audio Processing**: Librosa, NumPy

## 📊 Supported Audio Format

- **Format**: WAV
- **Sample Rate**: 16000 Hz (automatically resampled)
- **Duration**: 5 seconds (automatically adjusted)
- **Max File Size**: 50 MB

## 🔐 Security Notes

- Files are temporarily stored and deleted after processing
- CORS is enabled for local development
- File type and size validation implemented

## 📄 License

For educational and research purposes.

---

**Built with ❤️ for respiratory health research**
