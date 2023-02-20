import { setDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

//Increases the newest bounties Id
export const bountyIdUpdate = async (currentBounty) => {
  await setDoc(doc(db, 'Number', 'ctfrdjqpUj7a1GEafkZu'), {
    Bounty: currentBounty + 1,
  });
};

const now = new Date();
const timestamp = now.getTime() / 1000;
const ninetyDays = 7776000;
const expirationTime = timestamp + ninetyDays;

//Creates the new bounty and saves it to the database
export const createBountyId = async (artist, city, bountyNumber) => {
  let stringed = bountyNumber.toString();

  await setDoc(doc(db, 'Bounties', stringed), {
    artist,
    city,
    funds: '$0',
    target: '$10000',
    expiration: expirationTime,
    id: stringed,
  });
};
