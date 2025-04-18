import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { 
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged ,
  signOut ,
  sendPasswordResetEmail,
  GoogleAuthProvider ,
  signInWithPopup ,
   } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";


  import {
    getFirestore,doc, setDoc } from "https://www.gstatic.com/firebasejs/11.3.1/firestore.js";

  

 
 
const firebaseConfig = {
  apiKey: "AIzaSyCWydYDhqD6_oEWFEmhFnPTP6R4SnkFCSc",
  authDomain: "my-recipe-app-8d56d.firebaseapp.com",
  projectId: "my-recipe-app-8d56d",
  storageBucket: "my-recipe-app-8d56d.firebasestorage.app",
  messagingSenderId: "641672173991",
  appId: "1:641672173991:web:94c4029ca40ae0baf8be82",
  measurementId: "G-98T4FTVJRM"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);





const googlerovider = new GoogleAuthProvider();

 export{
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword ,
  onAuthStateChanged ,
  signOut,
  sendPasswordResetEmail ,
  GoogleAuthProvider,
  signInWithPopup,
  doc, setDoc,
  db,
 }