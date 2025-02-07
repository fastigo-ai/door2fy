import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAw9VmzHilekoICTooioX2xl1EP2IcbBb8",
  authDomain: "door2fy-e7344.firebaseapp.com",
  projectId: "door2fy-e7344",
  storageBucket: "door2fy-e7344.firebasestorage.app",
  messagingSenderId: "3868013655",
  appId: "1:3868013655:web:bc9dcd299966f7b6709f12",
  measurementId: "G-NS57BM05MZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

export { app, auth };
