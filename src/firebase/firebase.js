// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref } from 'firebase/database';
import { getFirestore, setDoc, doc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD577lG2aMuV7Ou5KxasK6hbEKVy0iLlcc',
  authDomain: 'bandbounty.firebaseapp.com',
  databaseURL:
    'https://bandbounty-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'bandbounty',
  storageBucket: 'bandbounty.appspot.com',
  messagingSenderId: '1066101809587',
  appId: '1:1066101809587:web:f9d724d685b0d750ae2bc6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const realtimeDb = getDatabase(app);

export const dbRef = ref(getDatabase(app));

export const updateBountyColorGreen = async (id) => {
  const bountyRef = doc(db, 'Bounties', id);
  setDoc(bountyRef, { active: true }, { merge: true });
};

export const updateBountyColorRed = async (id) => {
  const bountyRef = doc(db, 'Bounties', id);
  setDoc(bountyRef, { expiring: true }, { merge: true });
};
