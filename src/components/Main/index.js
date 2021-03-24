import React, { useState } from "react";
import Modal from "../Modal";

const Main = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleState = () => {
    setModalOpen(!isModalOpen);
  };
  return (
    <>
      <button onClick={toggleState}>Open Modal</button>
      {isModalOpen && (
        <Modal id='modal' isOpen={isModalOpen} onClose={toggleState}>
          <div className='box-body'>I am the content of the modal</div>
        </Modal>
      )}
    </>
  );
};

export default Main;
