import React from 'react';

import Button from './Button';
import Modal from './Modal';
import Timer from './Timer';
import { updateFunds } from '../firebase/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { toggleInfoModal } from '../store';
import '../styles/infoModal.css';

const ModalInfo = ({ bounty }) => {
  const dispatch = useDispatch();

  const { infoToggle, bio, logoUrl } = useSelector((state) => {
    return {
      infoToggle: state.infoModal.infoToggle,
      bio: state.currentBounty.bio,
      logoUrl: state.currentBounty.logo,
    };
  });

  const handleClose = () => {
    dispatch(toggleInfoModal());
  };

  const fundBountyButton = () => {
    const integer = parseInt(bounty.funds.slice(1));
    const newTotal = integer + 50;
    const newString = `$ ${newTotal.toString()}`;
    updateFunds(bounty.id, newString);
    handleClose();
  };

  const actionBar = (
    <div className="mx-auto sm:mx-0">
      <Button onClick={fundBountyButton} primary rounded className="px-6 py-2">
        Fund this bounty
      </Button>
    </div>
  );

  const modalInfo = (
    <Modal
      className="top-[5%] left-[5%] right-[5%] sm:left-[15%] sm:right-[15%] xl:top-[15%] xl:left-[20%] xl:right-[20%]"
      actionBar={actionBar}
      onClose={handleClose}
      buttonPosition="justify-center pt-8"
    >
      <>
        <div className="grid grid-cols-2 grid-rows-10 sm:grid-rows-5 p-4 border-2 border-slate-300 rounded-md">
          <div className="col-span-2 col-start-1 row-start-6 sm:row-start-1 sm:col-span-1 sm:row-span-2 m-auto py-4">
            <img src={logoUrl} id="logo-img" alt="logo" className=""></img>
          </div>
          <div
            id="text-bio"
            className="col-start-1 col-span-2 row-start-8 sm:col-span-1 sm:row-start-3 row-span-3 m-auto text-center"
          >
            {bio}
          </div>
          <div
            id="artist"
            className="col-start-1 row-start-1 col-span-2 sm:col-span-1 sm:col-start-2 sm:row-start-1 mx-auto"
          >
            {bounty.artist}
          </div>
          <div
            id="text-city"
            className="col-start-1 row-start-2 col-span-2 sm:col-span-1 sm:col-start-2 sm:row-start-2 mx-auto"
          >
            {bounty.city}
          </div>
          <div
            id="text"
            className="col-span-2 col-start-1 row-start-3 sm:col-span-1 sm:col-start-2 sm:row-start-3 mx-auto text-center"
          >
            Total funds raised: <div id="underline">{bounty.funds}</div>
          </div>
          <div
            id="text"
            className="col-span-2 col-start-1 row-start-4 sm:col-span-1 sm:col-start-2 sm:row-start-4 mx-auto text-center"
          >
            Target: <div id="underline">{bounty.target}</div>
          </div>
          <div
            id="text"
            className="col-span-2 col-start-1 row-start-5 sm:col-span-1 sm:col-start-2 sm:row-start-5 mx-auto text-center"
          >
            Expiring in:
            <div id="underline">
              <Timer
                id={bounty.id}
                date={bounty.expiration}
                funds={bounty.funds}
                target={bounty.target}
              />
            </div>
          </div>
        </div>
      </>
    </Modal>
  );

  return <>{infoToggle && modalInfo}</>;
};

export default ModalInfo;
