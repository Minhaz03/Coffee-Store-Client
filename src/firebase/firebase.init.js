// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5SNvDI219fXC2G1qgo8dqSq6NlDX16O0",
  authDomain: "coffee-store-bb75b.firebaseapp.com",
  projectId: "coffee-store-bb75b",
  storageBucket: "coffee-store-bb75b.firebasestorage.app",
  messagingSenderId: "898484893006",
  appId: "1:898484893006:web:a5541e61b1546ad4429a1f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
