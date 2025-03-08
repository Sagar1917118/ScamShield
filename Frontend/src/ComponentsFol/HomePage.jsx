import React, { useContext } from "react";
import { TypeAnimation } from "react-type-animation";
import { FirebaseContext } from "../ContextFol/FirebaseProvider";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const { logout } = useContext(FirebaseContext);
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <section className="hero">
        <div className="hero-content">
          <h1>Protecting You from Fraudulent Calls</h1>
          <TypeAnimation
            sequence={[
              "Detect Suspicious Calls...",
              2000,
              "Stay Secure and Informed...",
              2000,
              "ScamShield at Your Service!",
              2000,
            ]}
            speed={50}
            wrapper="span"
            repeat={Infinity}
            className="dynamic-text"
          />
          <p>
            Empowering you with real-time fraud detection to keep your
            communications safe.
          </p>
          <button className="cta-button" onClick={() => navigate("/detection")}>
            Get Started
          </button>
        </div>
        <div className="hero-image">
          <img src="/fraudcall.png" alt="ScamShield" />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
