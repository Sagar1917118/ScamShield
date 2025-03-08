import React from "react";
import { useNavigate } from "react-router-dom";
import "./DetectionOption.css";

const DetectionOptions = () => {
  const navigate = useNavigate();

  return (
    <div className="detection-options-container">
      <h1>Choose Your Detection Method</h1>
      <div className="cards-container">
        <div className="card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2707/2707112.png"
            alt="Recorded Audio Detection"
          />
          <h2>Recorded Audio Detection</h2>
          <p>
            Upload a recorded audio file to analyze and detect fraudulent calls.
          </p>
          <button onClick={() => navigate("/upload-audio")}>
            Submit Audio
          </button>
        </div>
        <div className="card">
          <img
            src="https://www.endnowfoundation.org/wp-content/uploads/2021/05/Detect-Customer-Care-Fraud.png"
            alt="Live Call Detection"
          />
          <h2>Live Call Detection</h2>
          <p>Start a live detection session to monitor calls in real time.</p>
          <button onClick={() => navigate("/live-detection")}>
            Start Live Detection
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetectionOptions;
