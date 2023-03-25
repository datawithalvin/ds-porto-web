// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAH4v4LpIdjinBkhgxHFRDI3rl_Ql83fOA",
  authDomain: "mydataviz-porto.firebaseapp.com",
  databaseURL: "https://mydataviz-porto-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mydataviz-porto",
  storageBucket: "mydataviz-porto.appspot.com",
  messagingSenderId: "185545537103",
  appId: "1:185545537103:web:9422a0ed8bfa9d009a9c3a",
  measurementId: "G-KRM3VTEMKX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);