// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "todo-3ce9b.firebaseapp.com",
  projectId: "todo-3ce9b",
  storageBucket: "todo-3ce9b.appspot.com",
  messagingSenderId: "115444030014",
  appId: "1:115444030014:web:d4ad934acee68ab30c8f6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)