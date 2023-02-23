import React, {useState} from "react";
import IntroModal from "./IntroModal";

export default function Register(){


    const [showModal, setShowModal] = useState(false);

  function handleOpenModal() {
    setShowModal(true);
  }

  function               handleCloseModal() {
    setShowModal(false);
  }

  return (
    <div>
      <button onClick={handleOpenModal}>Get Started</button>
               <IntroModal show={showModal} onClose={handleCloseModal} title="Get Started">
        <p>This is the body of the modal.</p>
      </IntroModal>
    </div>
  );
    }














