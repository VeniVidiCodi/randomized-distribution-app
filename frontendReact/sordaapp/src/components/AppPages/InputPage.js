import React, { useState, useEffect } from 'react';
import Nav from '../Nav/Nav';
import TitleBar from '../TitleBar/TitleBar';
import GroupSection from '../GroupSection/GroupSection';
import RosterSection from '../RosterSection/RosterSection';
import Footer from '../Footer/Footer';
import { Group } from '../../groupClass';
// import { Redirect } from 'react-router';



function InputPage () {
  let GroupObject = new Group();
  const [aInput, setInput] = useState(GroupObject);
  const [aProjectName, setAProjectName] = useState("My Project");
  
  console.log("GroupObject:", GroupObject);
  console.log("aInput:", aInput);

  useEffect(() => {
    console.log("useEffect...");
    // let tempInput = aInput;
    // console.log(tempInput);
    // tempInput.projectName = aProjectName;
    // setInput(tempInput);
    // console.log(aInput);
  })
    
  // function setGroupFromCall(json){
  //     let tempGroup = aGroupObject;
  //     tempGroup.person = json.persons;
  //     tempGroup.groupNames = json.groupNames;
  //     tempGroup.projectName = json.projectName;
  //     setGroupObject(tempGroup);
  //     console.log(aGroupObject);
  //   }

  let shuffleData = () => {
    console.log("shuffle clicked...");
    console.log("aInput:", aInput);

    // Shuffle Roster Items randomly
    // Assign each roster item a group #
    // Save shuffle data

    // return <Redirect push to={{ pathname: '/results', groupObject: aInput, fromInput=true }} />
  }

    return (
        <div>
          <header className="App-header">
            <Nav />
            <TitleBar title={aProjectName} setTitle-={setAProjectName} /> 
            
          </header>
          <main id="entry-container">
            <GroupSection 
              // GroupObject={}
              // addGroup={this.state.GroupObject.addGroupNames} 
              />
            <RosterSection />
          </main>
          <Footer 
            // state={}
            value="Shuffle" 
            text="Shuffle"
            onClick={shuffleData} />
        </div>
    );
  }

export default InputPage;
