// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, onValue, set, get, child } from 'firebase/database';
import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  doc,
} from 'firebase/firestore';

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

//Create Bounty without id
// export const createBounty = async (artist, city) => {
//   const now = new Date();
//   const timestamp = now.getTime() / 1000;
//   const ninetyDays = 7776000;
//   const expirationTime = timestamp + ninetyDays;

//   const docRef = await addDoc(collection(db, 'Bounties'), {
//     artist,
//     city,
//     funds: '$0',
//     target: '$10000',
//     expiration: expirationTime,
//   });
//   console.log('Document written with ID: ', docRef.id);
// };

//Create Bounty with id

const now = new Date();
const timestamp = now.getTime() / 1000;
const ninetyDays = 7776000;
const twentyEightDays = 2419200;
const twoDays = 172800;
const expirationTime = timestamp + twoDays;

// let data;

// export const createBountyId = async (artist, city, bountyNumber) => {
//   //Insert val snapshot here and connect newBountyId to it

//   const numberRef = ref(db, 'BountyNumber');
//   onValue(numberRef, (snapshot) => {
//     data = snapshot.val();
//   });

//   const docRef = await setDoc(doc(db, 'Bounties', bountyNumber), {
//     artist,
//     city,
//     funds: '$0',
//     target: '$10000',
//     expiration: expirationTime,
//   });
// };

//Reading Bounty number
// const numberRef = ref(realtimeDb, 'BountyNumber');
// onValue(numberRef, (snapshot) => {
//   const data = snapshot.val();
// });

//Increments Id
function writeNewId(bounty) {
  set(ref(realtimeDb, 'BountyNumber'), {
    Bounty: bounty,
  });
}

//Writing Bounty number
export function updateBountyNumber() {
  const numberRef = ref(realtimeDb, 'BountyNumber');
  onValue(numberRef, (snapshot) => {
    return snapshot.val();
  });

  writeNewId(getBountyNumber().Bounty + 1);
}

//Get bountyNumber
export const getBountyNumber = () => {
  const numberRef = ref(realtimeDb, 'BountyNumber');
  onValue(numberRef, (snapshot) => {
    return snapshot.val();
  });
};

//Different method for getting bounty number

export const getBountyNumberNow = get(child(dbRef, 'Bounties'))
  .then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val().Bounty);
    } else {
      console.log('No data available..');
    }
  })
  .catch((error) => {
    console.error(error);
  });
