import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onSnapshot, collection } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { toggleModal, changeArtist, changeCity } from '../store';
import Button from './Button';
import Modal from './Modal';
import { createBountyId, bountyIdUpdate } from './BountyIdCreator';
import '../styles/index.css';

const ModalCreate = () => {
  const [bountyNumber, setBountyNumber] = useState();
  //Controls error messaging if input fields are left empty
  const [error, setError] = useState({
    artist: '',
    artistField: '',
    city: '',
    cityField: '',
  });

  const dispatch = useDispatch();

  const { toggle, artist, city } = useSelector((state) => {
    return {
      toggle: state.createModal.toggle,
      artist: state.createModal.artist,
      city: state.createModal.city,
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
    if (artist && city) {
      dispatch(toggleModal(false));
      createBountyId(artist, city, bountyNumber);
      bountyIdUpdate(bountyNumber);
    }

    //Handle missing fields
    if (!artist) {
      const updatedError = {
        ...error,
        artist: '* Must enter artist name',
        artistField: 'bg-red-300',
      };
      setError(updatedError);
    }
    if (!city) {
      const updatedError = {
        ...error,
        city: '* Must enter a city',
        cityField: 'bg-red-300',
      };
      setError(updatedError);
    }
    if (!artist && !city) {
      const updatedError = {
        ...error,
        artist: '* Must enter artist name',
        artistField: 'bg-red-300',
        city: '* Must enter a city',
        cityField: 'bg-red-300',
      };
      setError(updatedError);
    }
  };

  const handleClose = () => {
    dispatch(toggleModal(false));
  };

  const actionBar = (
    <div className="mx-auto sm:mx-0">
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
      className="top-1/4 left-[5%] right-[5%] lg:top-1/4 lg:left-1/4 lg:w-1/2"
      actionBar={actionBar}
      onClose={handleClose}
      buttonPosition="justify-end"
    >
      <>
        <form
          id="modal-create"
          className="grid grid-cols-1 grid-rows-10 sm:grid-cols-6 sm:grid-rows-6 h-fit "
        >
          <div className="col-start-1 row-start-6 sm:col-start-1 sm:col-span-3 sm:row-start-1 sm:row-span-6 border-2 p-6 mb-4 text-center text text-[0.9rem]">
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
          <label className="col-span-2 col-start-1 row-start-1 sm:col-start-4 mt-8 ml-8 flex flex-col">
            Artist <div className="text-red-400 ">{error.artist}</div>
          </label>

          <input
            className={`${error.artistField} col-start-1 row-start-2 sm:row-start-2 sm:col-start-4 sm:col-span-2 pl-4 py-4 ml-8 border-2 border-gray-500 focus:border-black h-3/5 rounded-md`}
            type="text"
            placeholder="Enter Artist name here.."
            onChange={(e) => {
              dispatch(changeArtist(e.target.value));
            }}
          />
          <label className="col-span-2 col-start-1 row-start-3 sm:col-start-4 sm:row-start-3 mt-8 ml-8">
            City <div className="text-red-400">{error.city}</div>
          </label>
          <input
            className={`${error.cityField} col-start-1 row-start-4 sm:row-start-4 sm:col-start-4 sm:col-span-2 pl-4 py-4 ml-8 border-2 border-gray-500 focus:border-black h-3/5 rounded-md"`}
            type="text"
            placeholder="Enter City here.."
            onChange={(e) => {
              dispatch(changeCity(e.target.value));
            }}
          />
        </form>
      </>
    </Modal>
  );

  return <>{toggle && modalCreate}</>;
};

export default ModalCreate;
