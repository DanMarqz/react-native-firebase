// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR API KEY HERE",
  authDomain: "YOUR AUTH DOMAIN HERE",
  projectId: "YOUR PROJECT ID HERE",
  storageBucket: "YOUR STORAGE BUCKET HERE",
  messagingSenderId: "YOUR MSG SENDER ID HERE",
  appId: "YOUR APP ID HERE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db
