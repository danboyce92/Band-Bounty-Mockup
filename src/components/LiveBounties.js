import React, { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../store';

import Timer from './Timer';
import ModalCreate from './ModalCreate';

const LiveBounties = () => {
  const dispatch = useDispatch();

  const [bounties, setBounties] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'Bounties'), (snapshot) => {
      setBounties(snapshot.docs.map((doc) => doc.data()));
    });
    return unsub;
  }, []);

  // const handleClose = () => {
  //     setToggleCreateModal(false);
  // }

  // const actionBar = <div>
  //     <Button onClick={handleClose} primary rounded className="px-6 py-2">Confirm</Button>
  //     </div>

  // const modalCreate = <Modal actionBar={actionBar} onClose={handleClose}>
  //             <>
  //                 <form className="grid grid-cols-6 grid-rows-6 h-full">
  //                     <div className="col-start-1 col-span-3 row-start-1 row-span-6 border-2 p-6 text-center">
  //                     Until the artist confirms the event, the bounty target will be set to $10,000. <hr/> <br/>
  //                     Each bounty will be given 90 days to be confirmed by the artist. <hr/> <br/>
  //                     After a bounty has been confirmed it will be given a maximum of 90 more days to reach it's target. <hr/> <br/>
  //                     If the bounty expires, donors will be refunded what they contributed. <hr/> <br/>
  //                     Start a bounty wherever you wish. If interest exists our team will try to locate a suitable venue.
  //                     </div>
  //                     <label className="ml-4 col-start-4 mt-8">Artist</label>
  //                     <input className="mx-4 row-start-2 col-start-4  col-span-2 pl-4 py- border-2 border-gray-500 focus:border-black h-3/5" type="text" placeholder="Enter Artist name here.." />

  //                     <label className="ml-4 col-start-4 row-start-3 mt-8">City</label>
  //                     <input className="mx-4 row-start-4 col-start-4 col-span-2 pl-4 border-2 border-gray-500 focus:border-black h-3/5" type="text" placeholder="Enter City here.." />

  //                 </form>
  //             </>
  //             </Modal>

  return (
    <div>
      <div className="relative ml-4 flex items-center">
        <div className=" mx-auto my-4 bg-white w-11/12 max-w-6xl h-16 rounded-md flex flex-row divide-x-4 divide-slate-400">
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
            className={`${bounty.active && 'border-4 bg-green-300'} ${
              !bounty.active && 'border-4 bg-slate-300'
            } mx-auto my-3  w-11/12 max-w-6xl h-16 rounded-md flex flex-row divide-x-2 divide-slate-400`}
          >
            <div className="basis-2/12 text-center mt-5">{bounty.artist}</div>
            <div className="basis-2/12 text-center mt-5">{bounty.city}</div>
            <div className="basis-2/12 text-center mt-5">{bounty.funds}</div>
            <div className="basis-2/12 text-center mt-5">{bounty.target}</div>
            {bounty.expiration && (
              <div className="basis-4/12 text-center mt-5">
                {<Timer date={bounty.expiration} />} <div id="time-left"></div>
              </div>
            )}
          </div>
        </div>
      ))}

      <button
        onClick={() => {
          dispatch(toggleModal(true));
        }}
        className="bg-orange-400 right-4 float-right mr-14 py-4 px-8 rounded-xl font-medium hover:bg-orange-200"
      >
        Create Bounty
      </button>

      <ModalCreate />
    </div>
  );
};

export default LiveBounties;
