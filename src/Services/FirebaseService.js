import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection  } from 'firebase/firestore'
import firebaseConfig from './FirebaseConfig.json';
import { useCollection } from "vuefire";

// 
export const firebaseApp = initializeApp({
    ...firebaseConfig,
    // add apikey
    apiKey: import.meta.env.VITE_APP_FIREBASE_CONFIG_API_KEY,
})

const auth = getAuth();
const db = getFirestore(firebaseApp)
const todos = useCollection(collection(db, 'ridersDataBase'))

export { auth, db, todos };
export const todosRef = collection(db, 'todos')