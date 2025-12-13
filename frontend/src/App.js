import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import ResultsDisplay from './components/ResultsDisplay';
import './App.css';

function App() {
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePrediction = (result) => {
    setPrediction(result);
    setError(null);
  };

  const handleError = (errorMessage) => {
    setError(errorMessage);
    setPrediction(null);
  };

  const handleReset = () => {
    setPrediction(null);
    setError(null);
    setLoading(false);
  };

  return (
    <div className="App">
      <div className="container">
        <header className="app-header">
          <div className="header-icon">🫁</div>
          <h1>Respiratory Sound Classifier</h1>
          <p className="subtitle">AI-Powered Respiratory Disease Detection</p>
        </header>

        <div className="main-content">
          {!prediction && !loading && (
            <FileUpload
              onPrediction={handlePrediction}
              onError={handleError}
              setLoading={setLoading}
            />
          )}

          {loading && (
            <div className="loading-container">
              <div className="spinner"></div>
              <p>Analyzing audio file...</p>
              <p className="loading-subtext">This may take a few seconds</p>
            </div>
          )}

          {error && (
            <div className="error-container">
              <div className="error-icon">⚠️</div>
              <h3>Error</h3>
              <p>{error}</p>
              <button onClick={handleReset} className="btn-primary">
                Try Again
              </button>
            </div>
          )}

          {prediction && !loading && (
            <ResultsDisplay prediction={prediction} onReset={handleReset} />
          )}
        </div>

        <footer className="app-footer">
          <p>⚕️ For research and educational purposes only</p>
          <p className="footer-note">Not a substitute for professional medical diagnosis</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
