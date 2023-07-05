import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, doc  } from 'firebase/firestore'
import firebaseConfig from './FirebaseConfig.json';
import { getStorage } from "firebase/storage";

// 
export const firebaseApp = initializeApp({
    ...firebaseConfig,
    // add apikey
    apiKey: import.meta.env.VITE_APP_FIREBASE_CONFIG_API_KEY,
})

const auth = getAuth();
const db = getFirestore(firebaseApp)
const storage = getStorage(firebaseApp);


export { auth, db, storage}