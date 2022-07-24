// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_fAnrY-5nIjE1tJib8h7i96OugY5N2Os",
  authDomain: "bookshelf-9bb86.firebaseapp.com",
  projectId: "bookshelf-9bb86",
  storageBucket: "bookshelf-9bb86.appspot.com",
  messagingSenderId: "475653592618",
  appId: "1:475653592618:web:d1e530b9233efec5da5553"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);