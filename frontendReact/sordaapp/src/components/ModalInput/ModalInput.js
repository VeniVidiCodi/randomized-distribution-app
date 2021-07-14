import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
// Modal
// –––––
import Modal from "react-modal";
import "./ModalInputGroup.css";

Modal.setAppElement("#root");


function SetupModal(props) {

  const [groupNumArray, setGroupNumArray] = useState( () => createGroupNums() );
  const [rosterNumArray, setRosterNumArray] = useState( () => createRosterNums() );
  const [minNum, setMinNum] = useState(2);
  const [isOpen, setIsOpen] = useState(true);
  const [numGroupsValue, setNumGroupsValue] = useState(2);
  const [numRosterValue, setNumRosterValue] = useState(2);


  function handleGroupChange(event) {
    setNumGroupsValue(event.target.value);
    setNumRosterValue(event.target.value);
    setMinNum(event.target.value);
  }


  function handleRosterChange(event) {
    setNumRosterValue(event.target.value);
  }


  function createGroupNums() {
    let tempGroupNums = [];
    for (let i = 2; i < 9; i++)
      tempGroupNums.push(i);

    return tempGroupNums;
  }


  function createRosterNums() {
    let tempRosterNums = [];
    for (let i = 2; i < 31; i++)
      tempRosterNums.push(i);

    return tempRosterNums;
  }


  function toggleModal() {
    setIsOpen(!isOpen);
  }


  useEffect(() => {
    let tempRosterNums = [];

    for (let i = minNum; i < 31; i++) {
      tempRosterNums.push(i);
    }

    setRosterNumArray(tempRosterNums);
  }, [minNum]);

  function handleOnclick() {
    props.handleBtnSubmit(numGroupsValue, numRosterValue);
    setIsOpen(!isOpen);
  }


  return(
  <Modal
    isOpen={isOpen}
    onRequestClose={toggleModal}
    contentLabel="My dialog"
    className="mymodal"
    overlayClassName="myoverlay"
    closeTimeoutMS={250}
    shouldCloseOnOverlayClick={false}
    >
    <div className="numberOfGroupsParent">
      <h4 className="numberOfGroupsLabel">Number Of Groups: </h4>
      <select value={numGroupsValue} onChange={handleGroupChange}>
        {groupNumArray.map(num => {
          return(
            <option key={nanoid()} value={num}>{num}</option>
          )
        })}
      </select>
    </div>
    <div className="numberOfRosterParent">
      <h4 className="numberOfGroupsLabel">Number Of Prople: </h4>
      <select value={numRosterValue} onChange={handleRosterChange}>
      {rosterNumArray.map(num => {
        return(
          <option key={nanoid()} value={num}>{num}</option>
        )
      })}
      </select>

    </div>
    <button className="modalSubmit-btn" onClick={handleOnclick}>Go</button>

  </Modal>
  );
}

export default SetupModal;
