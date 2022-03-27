// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmq9TWYQ7rsgoTPpdhPU0-vz4v06FaV5s",
  authDomain: "react-native-app-firebas-9c204.firebaseapp.com",
  projectId: "react-native-app-firebas-9c204",
  storageBucket: "react-native-app-firebas-9c204.appspot.com",
  messagingSenderId: "637114156521",
  appId: "1:637114156521:web:be5ac1d36c473b353a7778"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db