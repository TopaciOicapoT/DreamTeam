import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {getFirestore} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyAo0E04A3eRwIvQsOtc4vo19rlJWdeCGRQ",
  authDomain: "fantasymotogp-db94a.firebaseapp.com",
  projectId: "fantasymotogp-db94a",
  storageBucket: "fantasymotogp-db94a.appspot.com",
  messagingSenderId: "472573773618",
  appId: "1:472573773618:web:88d71363dbde29bb48392b",
  measurementId: "G-2NK6P28Q2P"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };
