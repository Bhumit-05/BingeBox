// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAl_CcLhxZbByfihXp8O3kss3m176F4YiE",
  authDomain: "netflix-gpt-34034.firebaseapp.com",
  projectId: "netflix-gpt-34034",
  storageBucket: "netflix-gpt-34034.appspot.com",
  messagingSenderId: "419673771400",
  appId: "1:419673771400:web:1e5b71584f4d6f5d00fe3d",
  measurementId: "G-97S912VK0H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();