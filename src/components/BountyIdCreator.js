import { setDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

export const bountyIdUpdate = async (currentBounty) => {
  await setDoc(doc(db, 'Number', 'ctfrdjqpUj7a1GEafkZu'), {
    Bounty: currentBounty + 1,
  });
};

const now = new Date();
const timestamp = now.getTime() / 1000;
const ninetyDays = 7776000;
const twentyEightDays = 2419200;
const twoDays = 172800;
const expirationTime = timestamp + twoDays;

export const createBountyId = async (artist, city, bountyNumber) => {
  //Insert val snapshot here and connect newBountyId to it

  let stringed = bountyNumber.toString();

  await setDoc(doc(db, 'Bounties', stringed), {
    artist,
    city,
    funds: '$0',
    target: '$10000',
    expiration: expirationTime,
  });
};
