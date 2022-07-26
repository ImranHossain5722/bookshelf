// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId,
  apiKey: "AIzaSyAReInWQOYKkujR4sOn6BLrTjmJlnzDaiQ",
  authDomain: "darkfam-virtual-dairy.firebaseapp.com",
  projectId: "darkfam-virtual-dairy",
  storageBucket: "darkfam-virtual-dairy.appspot.com",
  messagingSenderId: "771090903302",
  appId: "1:771090903302:web:f626f698990a0f8c352e87",
  measurementId: "G-3FKNRQBMSZ" 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;