import React, { useState, useContext } from "react";
import { FirebaseContext } from "../ContextFol/FirebaseProvider";
import "./Login.css"; // Import the CSS file

const Login = () => {
  const { signInWithEmailAndPass, signinWithGoogle } =
    useContext(FirebaseContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPass(email, password);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        <button className="google-signin" onClick={signinWithGoogle}>
          Sign in with Google
        </button>
      </form>
    </div>
  );
};

export default Login;
