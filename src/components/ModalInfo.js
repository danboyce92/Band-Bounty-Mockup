import React, { useState } from 'react';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

import Button from './Button';
import Modal from './Modal';
import Timer from './Timer';
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

  const actionBar = (
    <div className="mx-auto sm:mx-0">
      <Button onClick={handleClose} primary rounded className="px-6 py-2">
        Fund this bounty
      </Button>
    </div>
  );

  const modalInfo = (
    <Modal
      className="top-1/4 left-[5%] right-[5%]"
      actionBar={actionBar}
      onClose={handleClose}
      buttonPosition="justify-center pt-8"
    >
      <>
        <div className="grid grid-cols-2 grid-rows-5 p-4 border-2 border-slate-300 rounded-md">
          <div id="text" className="col-start-1 -row-start-1 row-span-2 m-auto">
            <img src={logoUrl} id="logo-img" alt="logo"></img>
          </div>
          <div id="text" className="col-start-1 row-start-3 row-span-3 m-auto">
            {bio}
          </div>
          <div id="artist" className="col-start-2 row-start-1 mx-auto">
            {bounty.artist}
          </div>
          <div id="text" className="col-start-2 row-start-2 mx-auto">
            {bounty.city}
          </div>
          <div
            id="text"
            className="col-start-2 row-start-3 mx-auto"
          >{`Total funds raised: ${bounty.funds}`}</div>
          <div
            id="text"
            className="col-start-2 row-start-4 mx-auto"
          >{`Target: ${bounty.target}`}</div>
          <div id="text" className="col-start-2 row-start-5 mx-auto">
            Expiring in:
            <Timer
              id={bounty.id}
              date={bounty.expiration}
              funds={bounty.funds}
              target={bounty.target}
            />
          </div>
        </div>
      </>
    </Modal>
  );

  return <>{infoToggle && modalInfo}</>;
};

export default ModalInfo;
