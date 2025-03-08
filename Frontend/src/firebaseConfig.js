import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBardtn28_CLPz1AteFrQl6ooNnsnUiV1E",
  authDomain: "scamschield.firebaseapp.com",
  projectId: "scamschield",
  storageBucket: "scamschield.appspot.com",
  messagingSenderId: "390785902193",
  appId: "1:390785902193:web:37a4b3386b3b03a6019dd0",
  measurementId: "G-GP6L6BVNM2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

export { app, auth, googleProvider, db };
