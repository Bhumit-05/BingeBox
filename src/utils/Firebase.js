// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOMO7q9mwZA6fHI3dZJG0hj8JMz_1YJRM",
  authDomain: "bingebox-gpt.firebaseapp.com",
  projectId: "bingebox-gpt",
  storageBucket: "bingebox-gpt.appspot.com",
  messagingSenderId: "741142966013",
  appId: "1:741142966013:web:a2ef0d00df74a1e1eb5894",
  measurementId: "G-6QY37RT69N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();