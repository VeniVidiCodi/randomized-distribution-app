import React, { useState, useEffect } from 'react';
import Modal from "react-modal";
import { nanoid } from 'nanoid';
import "./CSVmodal.css";

function CSVmodal(props) {
  const [isOpen, setIsOpen] = useState(true);
  const [array, setArray] = useState(props.arrayValue);


  function handleOnclickYesBtn() {
    props.handleBtnSubmit(true);
    toggleModal();
  }


  function handleOnclickNoBtn() {
    props.handleBtnSubmit(false);
    toggleModal();
  }


  function toggleModal() {
    setIsOpen(!isOpen);
  }


  return(
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="amodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={250}
        shouldCloseOnOverlayClick={false}
        >
        <div className='displayData-parent'>
          <h1 classsName='heading'>Here is the list of the {array.length} items of your roster</h1>
          {array.map((strValue, index) =>
            <p key={index} >{strValue}</p>)}
          <div className='confirmation-parent'>
            <h2>Is your list correct?</h2>
            <div className='confirmation-child'>
              <button className="roster-list-yes-btn" onClick={handleOnclickYesBtn}>Yes</button>
              <button className="roster-list-no-btn" onClick={handleOnclickNoBtn}>No</button>
            </div>
          </div>
        </div>
      </Modal>
  )

}

export default CSVmodal;
