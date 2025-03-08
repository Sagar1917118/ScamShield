import React,{ useState,useEffect} from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { PiMicrophoneLight,PiMicrophoneSlash} from "react-icons/pi";
import SoundLoading from './SoundLoading';
import "./Dictaphone.css"
import { useSocket } from "../AppContext/SocketContext";
const Dictaphone = () => {
  const {transcript,listening,resetTranscript,browserSupportsSpeechRecognition} = useSpeechRecognition();
  const [totalTranscript,setTotalTranscript]=useState();
  const [initialListening,setInitialLinsteing]=useState(false);
  const [prediction,setPrediction]=useState();
  const socket = useSocket();
  // -----listening socket
  useEffect(() => {
    if (socket) {
      socket.on("prediction", (data) => {
        console.log("Received prediction:", data);
      });

      return () => socket.off("prediction");
    }
  }, [socket]);
  useEffect(() => {
    if(!initialListening)
        return;
    if(transcript&&socket){
        console.log(transcript);
        // --sending request tio backend
        socket.emit("predict", { text: transcript });
        setTotalTranscript((prev) => { if(prev) return prev + transcript;else  return transcript });
    }
    setTimeout(()=>{
        SpeechRecognition.startListening()
    },500);
  }, [listening,socket]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  // --bgcolor for output result
  const getBackgroundColor = () => {
    if (!prediction || prediction.fraud_probability === undefined) return "bg-gray-100"; // Default
    const score = prediction.fraud_probability;
    if (score < 50) return "greenColor"; // Safe (Green)
    if (score >= 50 && score < 75) return "orangeColor"; // Medium Risk (Orange)
    return "redColor"; // High Risk (Red)
  };
  return (
    <div className="dictaphone-container">
      <div className="dictaphone-card">
        <h2 className="dictaphone-title">🎙️ Speech Recognition</h2>
        <span className={`microphone-status ${listening ? "microphone-on" : "microphone-off"}`}>
          {listening ? "Listening..." : "Microphone Off"}
        </span>

        <button className="dictaphone-reset" onClick={() => { resetTranscript(); setTotalTranscript(""); setPrediction()}} >
          Reset
        </button>

        <div className="dictaphone-transcript">{transcript || "Start speaking..."}</div>
        <div className="dictaphone-transcript-total">{totalTranscript || "Total transcript will appear here..."}</div>
          {prediction && (
          <div className={`dictaphone-transcript  ${getBackgroundColor()}`}>
            <p>🔍 <strong>Fraud Probability:</strong> <span className='predication-value'>{prediction?.fraud_probability}%</span></p>
            {prediction?.reason && <p>⚠️ <strong>Reason:</strong> {prediction.reason}</p>}
          </div>
        )}
        {listening && <SoundLoading />}

        <div className="button-container">
          <button onClick={() => { SpeechRecognition.startListening({ continuous: true }); setInitialLinsteing(true) }} 
                  className="microphone-button button-start">
            <PiMicrophoneLight size={30} />
          </button>

          <button onClick={() => { SpeechRecognition.stopListening(); setInitialLinsteing(false) }} 
                  className="microphone-button button-stop">
            <PiMicrophoneSlash size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Dictaphone;