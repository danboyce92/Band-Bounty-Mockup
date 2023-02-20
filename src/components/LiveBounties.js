import React, { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toggleModal } from '../store';
import LiveBounty from './LiveBounty';

import ModalInfo from './ModalInfo';
import ModalCreate from './ModalCreate';
import '../styles/LiveBounties.css';

const LiveBounties = ({ user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { currentBounty } = useSelector((state) => {
    return {
      currentBounty: state.currentBounty.bounty,
    };
  });

  const [bounties, setBounties] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'Bounties'), (snapshot) => {
      setBounties(snapshot.docs.map((doc) => doc));
    });
    return unsub;
  }, []);

  const createBountyButton = () => {
    if (user) {
      dispatch(toggleModal(true));
    } else {
      navigate('/signin');
    }
  };

  return (
    <div>
      <div className="relative ml-4 flex items-center">
        <div
          id="bounties-legend"
          className=" mx-auto my-4 bg-white w-full sm:w-11/12 max-w-6xl sm:h-16 rounded-md flex flex-row divide-x-4 divide-slate-400"
        >
          <div className="basis-2/12 text-center mt-5">Artist</div>
          <div className="basis-2/12 text-center mt-5">City</div>
          <div className="basis-2/12 text-center mt-5">Funds raised</div>
          <div className="basis-2/12 text-center mt-5">Target</div>
          <div className="basis-4/12 text-center mt-5">Expiration timer</div>
        </div>
      </div>

      {bounties.map((bounty) => (
        <div key={bounty.data().artist}>
          <LiveBounty bounty={bounty} user={user} />
        </div>
      ))}

      <div className="flex justify-center">
        <button
          onClick={createBountyButton}
          id="button"
          className="bg-orange-400 mt-4 mb-8 py-4 px-8 rounded-xl hover:bg-orange-200"
        >
          Create Bounty
        </button>
      </div>

      <ModalCreate />
      <ModalInfo bounty={currentBounty} />
    </div>
  );
};

export default LiveBounties;
