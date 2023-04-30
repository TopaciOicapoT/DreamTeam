// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

export { auth };
