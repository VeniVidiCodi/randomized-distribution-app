
import React, { useState, useEffect } from 'react';
import Nav from '../Nav/Nav';
import ResultDisplay from '../ResultDisplay/ResultDisplay';
import Footer from '../Footer/Footer';
import ResultsTitle from '../ResultsTitle/ResultsTitle';
import {Group, Person} from '../../groupClass.js';
import { nanoid } from 'nanoid';


function ResultsPage(props) {

   let GroupObject = new Group();
   if (props.location.isTrue) {
      GroupObject = () => {
         let tempGroup = new Group();
         tempGroup.persons = props.location.json.persons;
         tempGroup.groupNames = props.location.json.groupNames;
         tempGroup.setProjectName(props.location.json.projectName);

         return tempGroup;
       }
     } else {
       GroupObject = props.state.GroupObject;
     }


   const [aGroupObject, setGroupObject] = useState(GroupObject);
   const [fromLandingPage, setFromLandinPage] = useState(props.location.isTrue);
   const [aJson, setAjson] = useState(props.location.json);


  function handleOnClickSave() {
    console.log("SAVE BUTTON CLICKED...");
    //save to db by using utility component
  }

  function handleOnClickEdit(){
    console.log("EDIT BUTTON CLICKED...");
    //send redirect to inputPage
  }


  return (
      <div className="page-wrapper">
        <header>
          <Nav />
          <ResultsTitle key={nanoid()} title={aGroupObject.projectName}/>
        </header>
        <main id="entry-container">
          <ResultDisplay grpObject={aGroupObject}/>
        </main>
          <Footer
            value="Save"
            isTrue={false}
            onClickEdit={handleOnClickEdit}
            onClickSave={handleOnClickSave}/>
      </div>
  );

}

export default ResultsPage;
