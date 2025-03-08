# ScamShield
 Real-time fraud call detection system built with Flask, React, and Socket.IO. It leverages machine learning (using scikit-learn and joblib) to analyze call patterns and detect fraudulent activity instantly. The frontend, developed in React, provides a seamless user experience, while Flask and Socket.IO ensure real-time communication and detection.
## Features
-Real-time fraud detection using audio transcription and AI models.
-Socket.IO integration for continuous streaming and real-time processing.
-Machine Learning model trained on fraudulent and non-fraudulent messages.
-Deepgram API for accurate speech-to-text transcription.
-REST API and WebSocket support for seamless integration.
## Technologies Used
Frontend: React.js (Run using npm install && npm start)
-Backend: Flask, Flask-SocketIO (Run using pip install -r requirements.txt && python app.py)
-ML & AI: Scikit-Learn, Google Gemini AI, Deepgram API
-Other: dotenv, joblib, requests, numpy, pandas, nltk

## Installation
#Backend Setup
-Clone the repository :git clone https://github.com/Sagar1917118/ScamShield.git cd ScamShield
-Install Dependicies : pip install -r requirements.txt
- Set up environment variables: GOOGLE_API_KEY=your_gemini_api_key
DEEPGRAM_API_KEY=your_deepgram_api_key
CORS_ALLOWED_ORIGIN=*
- Run the Flask Server: python app.py

## Frontend Setup
- Navigate to the frontend folder : cd Frontend
- Install Dependicies: npm install
- npm start

## How It Works

- Audio Streaming: The frontend sends audio data in chunks to the backend via Socket.IO.
- Real-Time Transcription: The Deepgram API transcribes each chunk as it arrives.
- NLP Processing: The transcribed text is vectorized and analyzed using an ML model.
- Fraud Detection: Gemini AI analyzes the text and determines fraud probability with reasoning.
- Immediate Response: The backend sends fraud detection results for each audio chunk back to the frontend in real time.

## Dataset
- The ML model is trained using a dataset containing labeled fraud and normal text messages.
