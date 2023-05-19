import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection  } from 'firebase/firestore'
import firebaseConfig from './FirebaseConfig.json';

// 
export const firebaseApp = initializeApp({
    ...firebaseConfig,
    // add apikey
    apiKey: import.meta.env.VITE_APP_FIREBASE_CONFIG_API_KEY,
})

const auth = getAuth();
const db = getFirestore(firebaseApp)

export { auth, db };

export const todosRef = collection(db, 'todos')