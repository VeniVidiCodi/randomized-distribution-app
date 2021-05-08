import React, { useState, useEffect } from 'react';
import Nav from '../Nav/Nav';
import TitleBar from '../TitleBar/TitleBar';
import GroupSection from '../GroupSection/GroupSection';
import RosterSection from '../RosterSection/RosterSection';
import Footer from '../Footer/Footer';
import { Group } from '../../groupClass';


function InputPage () {
  let GroupObject = new Group();
  const [aGroupObject, setAGroupObject] = useState(GroupObject);
  const [aProjectName, setAProjectName] = useState("My Project");
  const [aGroupNames, setAGroupNames] = useState(GroupObject.groupNames);
  
  const [showTitle, setShowTitle] = useState(true);
  const [aTempTitle, setATempTitle] = useState(aProjectName);
  // Emulate componentDidMount lifecycle
  useEffect(() => {
    console.log("use effect group state");
  }, [aGroupObject])

  useEffect(() => {
    console.log("use effect group names");
  }, [aGroupNames])

  useEffect(() => {
    console.log("use effect project name");
  }, [aProjectName])
   

  // Title Behavior  = = = = = = = = = = = = = = = = = = = = =

  let handleChange = (event) => {
    console.log('Handling Change: ' + event.target.value);
    // this.setState({title: event.target.value});
    setATempTitle(event.target.value);
  }
  
  let handleSubmit = (event) => {
    console.log('Submitting title: ' + event.target.value);
    // event.preventDefault();
    setAProjectName(aTempTitle);
    // props.setTitle
    toggleTitle();
  }

  let toggleTitle = () => {
    console.log("Toggling Title" );
    if (showTitle) {
        console.log("T -> F");
        setShowTitle(false);
        // this.setState({showTitle: false})
      } else {
        console.log("F -> T");
        setShowTitle(true);
        // this.setState({showTitle: true})
      };
  }


  // Group Section Behavior  = = = = = = = = = = = = = = = = = = = = =

  let createNewGroup = () => { 
    let length = aGroupNames.length;
    let name = "Group" + (length + 1);
    console.log(name);
    return name;
  }

  let addGroup = () => {
    console.log("addGroup clicked...");
    let tempGroupObject = aGroupObject;
    // let tempGroups = aGroupObject.groupNames;
    // console.log(tempGroups);
    const newGroup = createNewGroup();
    tempGroupObject.groupNames.push(newGroup);
    // tempGroups.push(newGroup);

    console.log(tempGroupObject);

    setAGroupObject(tempGroupObject);
  }


  // Footer Button Handler  = = = = = = = = = = = = = = = = = = = = =
  
  let shuffleData = () => {
    console.log("shuffle clicked...");
    // Shuffle Roster Items randomly
    // Assign each roster item a group #
    // Save shuffle data

    // return <Redirect push to={{ pathname: '/results', groupObject: aProjectState, fromInput=true }} />
  }

    return (
        <div>
          <header className="App-header">
            <Nav />
            <TitleBar 
              title={aProjectName} 
              tempTitle={aTempTitle}
              setTitle={setAProjectName}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              showTitle={showTitle}
              toggleTitle={toggleTitle} /> 
            
          </header>
          <main id="entry-container">
            <GroupSection 
              groupNames={aGroupNames}
              // setGroupNames={(group) => setAGroupNames(group)}
              addGroup={addGroup}
              
              />
            <RosterSection />
          </main>
          <Footer 
            GroupObject={{GroupObject}}
            value="Shuffle" 
            text="Shuffle"
            onClick={shuffleData} />
        </div>
    );
  }

export default InputPage;
