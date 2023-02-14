import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Timer from './Timer';
import ModalInfo from './ModalInfo';
import { toggleInfoModal, changeCurrentBounty } from '../store';

const LiveBounty = ({ bounty }) => {
  // const [currentBounty, setCurrentBounty] = useState();
  const [confirmButtonToggle, setConfirmButtonToggle] = useState(false);

  const dispatch = useDispatch();

  return (
    <div>
      <div className="ml-4 relative flex flex-col">
        <div
          onClick={() => {
            dispatch(changeCurrentBounty(bounty.data()));
            setConfirmButtonToggle(!confirmButtonToggle);
            // dispatch(toggleInfoModal());
          }}
          id="bounties-list"
          className={`${bounty.data().active && 'border-4 bg-green-300'} ${
            bounty.data().expiring && 'border-4 bg-rose-500'
          } ${
            !bounty.data().active &&
            !bounty.data().expiring &&
            'border-4 bg-slate-300'
          } mx-auto my-3 w-full sm:w-11/12 max-w-6xl  rounded-md flex flex-row divide-x-2 divide-slate-400`}
        >
          <div className="basis-2/12 text-center mt-5">
            {bounty.data().artist}
          </div>
          <div className="basis-2/12 text-center mt-5">
            {bounty.data().city}
          </div>
          <div className="basis-2/12 text-center mt-5">
            {bounty.data().funds}
          </div>
          <div className="basis-2/12 text-center mt-5">
            {bounty.data().target}
          </div>
          {bounty.data().expiration && (
            <div className="basis-4/12 text-center mt-5">
              {
                <Timer
                  id={bounty.id}
                  date={bounty.data().expiration}
                  funds={bounty.data().funds}
                  target={bounty.data().target}
                />
              }
            </div>
          )}
          {confirmButtonToggle && (
            <button
              onClick={() => {
                dispatch(toggleInfoModal());
              }}
              className="bg-green-300"
            >
              Open Bounty
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LiveBounty;
