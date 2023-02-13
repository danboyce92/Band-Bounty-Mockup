import React, { useState } from 'react';
import Button from './Button';
import Modal from './Modal';

const ModalInfo = () => {
  const [toggle, setToggle] = useState(false);

  const handleClose = () => {
    setToggle(!toggle);
  };

  const actionBar = (
    <div className="mx-auto sm:mx-0">
      <Button primary rounded className="px-6 py-2">
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
        <div>Hello New component here</div>
      </>
    </Modal>
  );

  return <>{toggle && modalInfo}</>;
};

export default ModalInfo;
