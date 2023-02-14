import React, { useState } from 'react';
import Button from './Button';
import Modal from './Modal';
import { useDispatch, useSelector } from 'react-redux';
import { toggleInfoModal } from '../store';

const ModalInfo = ({ bounty }) => {
  const dispatch = useDispatch();

  const { infoToggle } = useSelector((state) => {
    return {
      infoToggle: state.infoModal.infoToggle,
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
    >
      <>
        <div className="grid grid-cols-2 grid-rows-2">
          <div className="col-start-1 -row-start-1">Logo</div>
          <div className="col-start-1 row-start-2">Bio</div>
          <div className="col-start-2 row-start-1">
            <div className="text-xl">{bounty.artist}</div>
          </div>
        </div>
      </>
    </Modal>
  );

  return <>{infoToggle && modalInfo}</>;
};

export default ModalInfo;
