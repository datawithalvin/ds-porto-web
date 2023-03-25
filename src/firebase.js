import firebase from 'firebase/app';
import 'firebase/database';

// Your web app's Firebase configuration
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
  const app = firebase.initializeApp(firebaseConfig);
  
  // Get a reference to the database
  const db = app.database();
  
  // Retrieve data from the database
  db.ref('/path/to/data').once('value')
    .then((snapshot) => {
      const data = snapshot.val(); // Data as a JSON object
      // Use the data to render your components
    })
    .catch((error) => {
      console.error(error);
    });
  