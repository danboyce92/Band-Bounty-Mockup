import React, { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../store';

import Timer from './Timer';
import ModalCreate from './ModalCreate';
import ModalInfo from './ModalInfo';
import '../styles/LiveBounties.css';

const LiveBounties = () => {
  const dispatch = useDispatch();

  const [bounties, setBounties] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'Bounties'), (snapshot) => {
      setBounties(snapshot.docs.map((doc) => doc.data()));
    });
    return unsub;
  }, []);

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
        <div key={bounty.artist} className="ml-4 relative flex flex-col">
          <div
            id="bounties-list"
            className={`${bounty.active && 'border-4 bg-green-300'} ${
              bounty.expiring && 'border-4 bg-rose-500'
            } ${
              !bounty.active && !bounty.expiring && 'border-4 bg-slate-300'
            } mx-auto my-3 w-full sm:w-11/12 max-w-6xl  rounded-md flex flex-row divide-x-2 divide-slate-400`}
          >
            <div className="basis-2/12 text-center mt-5">{bounty.artist}</div>
            <div className="basis-2/12 text-center mt-5">{bounty.city}</div>
            <div className="basis-2/12 text-center mt-5">{bounty.funds}</div>
            <div className="basis-2/12 text-center mt-5">{bounty.target}</div>
            {bounty.expiration && (
              <div className="basis-4/12 text-center mt-5">
                {
                  <Timer
                    date={bounty.expiration}
                    funds={bounty.funds}
                    target={bounty.target}
                  />
                }{' '}
                <div id="time-left"></div>
              </div>
            )}
          </div>
        </div>
      ))}

      <div className="xl:flex xl:justify-center">
        <button
          onClick={() => {
            dispatch(toggleModal(true));
          }}
          id="button"
          className="bg-orange-400 mt-4 mr-10 float-right xl:float-none py-4 px-8 rounded-xl hover:bg-orange-200"
        >
          Create Bounty
        </button>
      </div>

      <ModalCreate />
      <ModalInfo />
    </div>
  );
};

export default LiveBounties;
