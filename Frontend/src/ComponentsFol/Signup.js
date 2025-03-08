import React, { useState, useContext } from "react";
import { FirebaseContext } from "../ContextFol/FirebaseProvider";

const Signup = () => {
  const { signupWithEmailAndPassword } = useContext(FirebaseContext); // Ensure this is coming from FirebaseProvider
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    if (!signupWithEmailAndPassword) {
      console.error("signupWithEmailAndPassword is undefined");
      return;
    }
    signupWithEmailAndPassword(firstName, lastName, email, password);
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
          required
        />
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
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
