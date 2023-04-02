import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxTlyqJ_ujOwFGc3JWKfyMsr6iRqJVtIU",
  authDomain: "clone-2089f.firebaseapp.com",
  projectId: "clone-2089f",
  storageBucket: "clone-2089f.appspot.com",
  messagingSenderId: "723386374372",
  appId: "1:723386374372:web:6a6004ff2c0fbf3ce2b4f1",
  measurementId: "G-C6S32L3G6D"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };