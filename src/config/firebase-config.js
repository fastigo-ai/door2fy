import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdIjlT3DtVnx1KGfhCKIBe63DdZVHcpIo",
  authDomain: "door2fy-456d9.firebaseapp.com",
  projectId: "door2fy-456d9",
  storageBucket: "door2fy-456d9.firebasestorage.app",
  messagingSenderId: "1010626602088",
  appId: "1:1010626602088:web:3b2f94d91777c1dad507dd",
  measurementId: "G-60X3H7EB8Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

export { app, auth };
