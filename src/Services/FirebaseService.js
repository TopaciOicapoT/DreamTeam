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
const MotoGp = useCollection(collection(db, 'summaryMotoGp'))

export { auth, db, MotoGp };
export const MotoGpRef = collection(db, 'motoGp')