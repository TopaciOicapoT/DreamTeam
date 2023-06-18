import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, doc  } from 'firebase/firestore'
import firebaseConfig from './FirebaseConfig.json';
import { useCollection, useDocument, useFirestore } from "vuefire";

// 
export const firebaseApp = initializeApp({
    ...firebaseConfig,
    // add apikey
    apiKey: import.meta.env.VITE_APP_FIREBASE_CONFIG_API_KEY,
})

const auth = getAuth();
const db = getFirestore(firebaseApp)
const MotoGp = useCollection(collection(db, 'summaryMotoGp'))

const vfdb = useFirestore()
const summaryMotoGp = useDocument(doc(vfdb, 'summaryMotoGp', 'summary'))
const summaryMoto2 = useDocument(doc(vfdb, 'summaryMoto2', 'summary'))
const summaryMoto3 = useDocument(doc(vfdb, 'summaryMoto3', 'summary'))

export { auth, db, summaryMotoGp };
