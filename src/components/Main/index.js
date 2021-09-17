import React, { useState } from "react";
import Modal from "../Modal";

const Main = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleState = () => {
    setModalOpen(!isModalOpen);
  };
  return (
    <>
      <div className='start-modal' onClick={toggleState}>
        Get a gift!
      </div>
      {isModalOpen && (
        <Modal id='modal' isOpen={isModalOpen} onClose={toggleState}>
          <div className='box-body'>Don't miss out this opportunity!</div>
          <span>Copy Promo Code: </span>
          <span
            className='code'
            onClick={() => {
              navigator.clipboard.writeText("FREE-SHIPPING");
            }}
          >
            FREE-SHIPPING
          </span>
        </Modal>
      )}
    </>
  );
};

export default Main;
