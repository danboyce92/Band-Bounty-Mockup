import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ref, onValue } from 'firebase/database';
import { onSnapshot, collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { toggleModal } from '../store';
import Button from './Button';
import Modal from './Modal';
import { createBountyId } from './BountyIdCreator';
import { updateBountyNumber } from '../firebase/firebase';

import { bountyIdUpdate } from './BountyIdCreator';

const ModalCreate = () => {
  const [artist, setArtist] = useState('');
  const [city, setCity] = useState('');
  const [bountyNumber, setBountyNumber] = useState();

  const dispatch = useDispatch();

  const { toggle } = useSelector((state) => {
    return {
      toggle: state.createModal.toggle,
    };
  });

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'Number'), (snapshot) => {
      snapshot.docs.forEach((doc) => {
        setBountyNumber(doc.data().Bounty);
      });
    });
    return unsub;
  }, []);

  const createBountyButton = () => {
    dispatch(toggleModal(false));
    createBountyId(artist, city, bountyNumber);
    bountyIdUpdate(bountyNumber);
  };

  const handleClose = () => {
    dispatch(toggleModal(false));
  };

  const actionBar = (
    <div>
      <Button
        onClick={createBountyButton}
        primary
        rounded
        className="px-6 py-2"
      >
        Create Bounty
      </Button>
    </div>
  );

  const modalCreate = (
    <Modal
      className="min-w-1/2 px-8 py-12"
      actionBar={actionBar}
      onClose={handleClose}
    >
      <>
        <form className="grid grid-cols-6 grid-rows-6 h-full ">
          <div className="col-start-1 col-span-3 row-start-1 row-span-6 border-2 p-6 text-center text text-[0.9rem]">
            Until the artist confirms the event, the bounty target will be set
            to $10,000. <hr /> <br />
            Each bounty will be given 90 days to be confirmed by the artist.{' '}
            <hr /> <br />
            After a bounty has been confirmed it will be given a maximum of 90
            more days to reach it's target. <hr /> <br />
            If the bounty expires, donors will be refunded what they
            contributed. <hr /> <br />
            Start a bounty wherever you wish. If interest exists our team will
            try to locate a suitable venue
          </div>
          <label className="ml-8 col-start-4 mt-8">Artist</label>
          <input
            className="ml-8 row-start-2 col-start-4  col-span-2 pl-4 py- border-2 border-gray-500 focus:border-black h-3/5 rounded-md"
            type="text"
            placeholder="Enter Artist name here.."
            onChange={(e) => {
              setArtist(e.target.value);
            }}
          />

          <label className="ml-8 col-start-4 row-start-3 mt-8">City</label>
          <input
            className="ml-8 row-start-4 col-start-4 col-span-2 pl-4 border-2 border-gray-500 focus:border-black h-3/5 rounded-md"
            type="text"
            placeholder="Enter City here.."
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
        </form>
      </>
    </Modal>
  );

  return <>{toggle && modalCreate}</>;
};

export default ModalCreate;
