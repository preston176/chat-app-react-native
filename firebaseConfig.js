// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrSE2HQ-Nz7trpj-0vVhDfVqwRoAM-qGI",
  authDomain: "tectalk-e05f6.firebaseapp.com",
  projectId: "tectalk-e05f6",
  storageBucket: "tectalk-e05f6.appspot.com",
  messagingSenderId: "614327329210",
  appId: "1:614327329210:web:a0c93f5cb2427734903d83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth }; // Export db and auth as separate named exports
