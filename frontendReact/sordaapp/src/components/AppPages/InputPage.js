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
  const [aGroupNames, setAGroupNames] = useState([]);
  
  // console.log("GroupObject:", GroupObject);
  // console.log("aInput:", aInput);

  useEffect(() => {
    console.log("useEffect...");
    let tempInput = aInput;
    console.log(tempInput);

    tempInput.projectName = aProjectName;
    tempInput.aGroupNames = aGroupNames;
    setInput(tempInput);
    console.log(aInput);

  }, [aInput, aProjectName, aGroupNames])
    

  let shuffleData = () => {
    console.log("shuffle clicked...");

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
              groupNames={aGroupNames}
              setGroupNames={(group) => setAGroupNames(group)}
              />
            <RosterSection />
          </main>
          <Footer 
            GroupObject={{aInput}}
            value="Shuffle" 
            text="Shuffle"
            onClick={shuffleData} />
        </div>
    );
  }

export default InputPage;
