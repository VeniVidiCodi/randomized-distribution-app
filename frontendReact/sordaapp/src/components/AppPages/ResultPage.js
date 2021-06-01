
import React, { useState,  } from 'react';
import Nav from '../Nav/Nav';
import ResultDisplay from '../ResultDisplay/ResultDisplay';
import Footer from '../Footer/Footer';
import ResultsTitle from '../ResultsTitle/ResultsTitle';
import {Group, Person, GroupName} from '../../utils/groupClass.js';  //watch out for utils. keep for merge
import {Redirect} from 'react-router-dom';
//import { nanoid } from 'nanoid';
import {getRequest, postRequest} from "../../utils/queries.js";


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
  const [fromLandingPage, setFromLandingPage] = useState(props.location.fromLandingPage);
  const [fromInputPage, setFromInputPage] = useState(props.location.fromInputPage);
  const [aJson, setAjson] = useState(props.location.json);
  const [editButtonClicked, setEditButtonClicked] = useState(false);
  // check console to see from which page is being received
  console.log("FROM LANDING:", fromLandingPage);
  console.log("FROM INPUT:", fromInputPage);

  function handleOnClickSave() {
    console.log("SAVE BUTTON CLICKED...");
    //save to db by using utility component

    const groups = new Group();

    groups.setProjectName("Project Safari");
    groups.addPerson(new Person("Lion", 1));
    groups.addPerson(new Person("Elephant", 2));
    groups.addGroupNames(new GroupName("Section Danger"));
    groups.addGroupNames(new GroupName("Section Safe"));
    var myJSON = JSON.stringify(groups);  //aGroupObject

    console.log(myJSON);
    console.log(JSON.stringify(JSON.parse(myJSON), null, 2));
    const json = postRequest(myJSON);
    setAjson(json);

  }


  //when the edit button is clicked, setEditButtonClicked is set to true which triggers the conditional below function.
  function handleOnClickEdit(){
    console.log("EDIT BUTTON CLICKED...");
    setEditButtonClicked(true);
  }


  //checks to see if the the edit button is clicked and will redirect the page to inputPage and send state with it.
  if (editButtonClicked){
    if (fromLandingPage) {
      return <Redirect to={{pathname: '/grouper', json: aJson, fromResultPage: true, fromLandingPage: false, fromInputPage: false}}/>;
    } else {
      return <Redirect to={{pathname: '/grouper', GroupObject: aGroupObject, fromResultPage: true, fromLandingPage: false, fromInputPage: false}}/>;
    }
  }


  return (
      <div className="page-wrapper">
        <header>
          <Nav />
          <ResultsTitle title={aGroupObject.projectName}/>
        </header>
        <main id="entry-container">
          <ResultDisplay groupObject={aGroupObject}/>
        </main>
          <Footer
            // value="Save"
            fromInputPage={fromInputPage}  /* need fromLandingPage boolean */
            fromLandingPage={fromLandingPage}
            onClickEdit={handleOnClickEdit}
            onClickSave={handleOnClickSave}/>
      </div>
  );

}

export default ResultsPage;
