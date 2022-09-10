// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCiB2zVfW9U6jmWZbgk7ZibtwDzo6ii6IE",
  authDomain: "clone-593e7.firebaseapp.com",
  projectId: "clone-593e7",
  storageBucket: "clone-593e7.appspot.com",
  messagingSenderId: "759477364907",
  appId: "1:759477364907:web:a0cbbe4b55d191a1176fee",
  measurementId: "G-7SRKKMXL6R",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
