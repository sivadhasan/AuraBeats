// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//! Authentication services from firebase
import { getAuth } from "firebase/auth";

// ! Dtabase Services from firebase
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXM-zlaocnMloxmivu3xBP16ypIvUbV-s",
  authDomain: "aurabeats-27.firebaseapp.com",
  projectId: "aurabeats-27",
  storageBucket: "aurabeats-27.firebasestorage.app",
  messagingSenderId: "1071557769060",
  appId: "1:1071557769060:web:27641316712dc8fa9aac71"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export let __AUTH = getAuth(firebaseApp);
export let __DB = getFirestore(firebaseApp);

export default firebaseApp;