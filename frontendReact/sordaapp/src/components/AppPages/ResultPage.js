
import React, { useState } from 'react';
import Nav from '../Nav/Nav';
import ResultDisplay from '../ResultDisplay/ResultDisplay';
import Footer from '../Footer/Footer';
import ResultsTitle from '../ResultsTitle/ResultsTitle';
import { Group } from '../../utils/groupClass.js';  //watch out for utils. keep for merge
import { Redirect } from 'react-router-dom';
import { postRequest } from "../../utils/queries.js";

import "./ModalPassword.css";

import Modal from "react-modal";
Modal.setAppElement("#root");


function ResultsPage(props) {

  let GroupObject = new Group();

  if (props.location.fromLandingPage) {
    GroupObject = () => {
       let tempGroup = new Group();
       tempGroup.persons = props.location.json.persons;
       tempGroup.groupNames = props.location.json.groupNames;
       tempGroup.setProjectName(props.location.json.projectName);

       return tempGroup;
     }
   } else {
     GroupObject = props.location.GroupObject;
   }


  // –––––––
  //  State
  // –––––––

  const [aGroupObject, setGroupObject] = useState(GroupObject);
  // const [fromLandingPage, setFromLandingPage] = useState(props.location.fromLandingPage);
  // const [fromInputPage, setFromInputPage] = useState(props.location.fromInputPage);
  const [aJson, setAjson] = useState(props.location.json);
  const [editButtonClicked, setEditButtonClicked] = useState(false);
  const [saveButtonClicked, setSaveButtonClicked] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  // Check console to see from which page is being received
  // console.log("FROM LANDING:", fromLandingPage);
  // console.log("FROM INPUT:", fromInputPage);


  // ––––––––
  // Behavior
  // ––––––––

  async function handleOnClickSave() {
    console.log("SAVE BUTTON CLICKED...");
    //save to db by using utility component

    const groups = new Group();

    // groups.setProjectName("Project Safari");
    // groups.addPerson(new Person("Lion", 1));
    // groups.addPerson(new Person("Elephant", 2));
    // groups.addGroupNames(new GroupName("Section Danger"));
    // groups.addGroupNames(new GroupName("Section Safe"));
    groups.setProjectName(aGroupObject.projectName);
    groups.persons = aGroupObject.persons;
    groups.groupNames = aGroupObject.groupNames;
    var myJSON = JSON.stringify(groups);  //aGroupObject

    console.log(JSON.stringify(JSON.parse(myJSON), null, 2));

    // let json = postRequest(myJSON).then(result => {
    //   console.log(result);
    //   return result;
    // });
    await call(myJSON);

    setSaveButtonClicked(!saveButtonClicked);
  }

  async function call(myJSON) {
     const json = await postRequest(myJSON);  //call the API to get the user data
      if(json !== null) {
        console.log(json);

        setAjson(json);
      } else {
        console.log("No Project returned; Object:null");
      }
  }

  //when the edit button is clicked, setEditButtonClicked is set to true which triggers the conditional below function.
  function handleOnClickEdit(){
    if(saveButtonClicked)
      toggleModal();
    else if (props.location.fromInputPage)
      setEditButtonClicked(true);
    else
      toggleModal();

  }

  function toggleModal() {
    setIsOpen(!isOpen);
  }


  //–––––––––
  //–– Modal
  //–––––––––
  const [password, setPassword] = useState("");

  function handleChange(event) {
    const tempPassword = event.target.value;
    setPassword(tempPassword);
    event.preventDefault();
  }

  function handleSubmit(event) {
    if (password === aJson.accessPassword)
      setEditButtonClicked(true);
    event.preventDefault();
  }



  // Checks and sends correct state data type to input page
  if (editButtonClicked){
    if (props.location.fromLandingPage) {
      return <Redirect to={{pathname: '/grouper', json: aJson, fromResultPage: true, fromLandingPage: false, fromInputPage: false}}/>;
    } else {
      return <Redirect to={{pathname: '/grouper', GroupObject: aGroupObject, fromResultPage: true, fromLandingPage: false, fromInputPage: false}}/>;
    }
  }

  function displayModal() {
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
      <div className="projectIDText">Project ID: {aJson.uniqueID}</div>
      <div className="inputPasswordField">
        <form onSubmit={handleSubmit}>
          <input
            value={password}
            onChange={handleChange}
            type="text"
            name="AccessID"
            placeholder="Enter Passcode"
            className="textField"
            maxLength="7" />
          <button type="submit" name="getResultsPage" className="submit">GO</button>
        </form>
      </div>
      <button className="closeButton" onClick={toggleModal}>Close</button>
    </Modal>
    );
  }

  function resultsTitle() {
    if (props.location.fromLandingPage || saveButtonClicked) {
      return(
        <ResultsTitle title={aGroupObject.projectName} accessID={aJson.uniqueID} useJson={true}/>
      )
    }
    else {
      return(
        <ResultsTitle title={aGroupObject.projectName} useJson={false}/>
      )
    }
  }


  return (
      <div className="page-wrapper">
        <header>
          <Nav />
          {resultsTitle()}
        </header>
        <main id="entry-container">
          <ResultDisplay groupObject={aGroupObject}/>
        </main>
          <Footer
            // value="Save"
            fromInputPage={props.location.fromInputPage}  /* need fromLandingPage boolean */
            fromLandingPage={props.location.fromLandingPage}
            saveButtonClicked={saveButtonClicked}
            onClickEdit={handleOnClickEdit}
            onClickSave={handleOnClickSave}/>
          {(props.location.fromLandingPage || saveButtonClicked) ? displayModal() : null}

      </div>

  );

}

export default ResultsPage;
