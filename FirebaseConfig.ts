// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKBqG3oWZVqQFs9jXEAorCpQikrAs9q8M",
  authDomain: "cognitive-cue.firebaseapp.com",
  projectId: "cognitive-cue",
  storageBucket: "cognitive-cue.appspot.com",
  messagingSenderId: "753466609153",
  appId: "1:753466609153:web:a2c0908a60f72cd3177a00",
  measurementId: "G-XLTXJK8W42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);


