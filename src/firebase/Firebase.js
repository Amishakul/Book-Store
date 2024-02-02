// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAugPAfYotJpiw6h56C03TaYJ0zgmZWzHo",
  authDomain: "book-store-8a8cd.firebaseapp.com",
  projectId: "book-store-8a8cd",
  storageBucket: "book-store-8a8cd.appspot.com",
  messagingSenderId: "67629486243",
  appId: "1:67629486243:web:f5a0bbfffa973d20eb6f16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;