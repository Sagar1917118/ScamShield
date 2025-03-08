import React, { createContext, useState, useEffect } from "react";
import { auth, googleProvider } from "../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router";

export const FirebaseContext = createContext();

const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) navigate("/home");
    });
    return () => unsubscribe();
  }, [navigate]);

  const signupWithEmailAndPassword = async (
    firstName,
    lastName,
    email,
    password
  ) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, {
        displayName: `${firstName} ${lastName}`,
      });
      setUser(userCredential.user);
      navigate("/home");
    } catch (error) {
      console.error("Signup Error:", error.message);
    }
  };

  const signInWithEmailAndPass = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (error) {
      console.error("Login Error:", error.message);
    }
  };

  const signinWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
      navigate("/home");
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    navigate("/");
  };

  return (
    <FirebaseContext.Provider
      value={{
        user,
        signupWithEmailAndPassword,
        signInWithEmailAndPass,
        signinWithGoogle,
        logout,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
