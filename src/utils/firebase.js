// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwLpD60Qcn49SR68h3v78SOPDuoMhmXkY",
  authDomain: "netflixgpt-37001.firebaseapp.com",
  projectId: "netflixgpt-37001",
  storageBucket: "netflixgpt-37001.firebasestorage.app",
  messagingSenderId: "382793294616",
  appId: "1:382793294616:web:bda036ca0ffa51a221b46d",
  measurementId: "G-16CN0DPGK2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Pass the 'app' instance explicitly to getAuth
export const auth = getAuth();