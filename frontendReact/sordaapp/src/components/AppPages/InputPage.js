import React, { useState, useEffect } from 'react';
import Nav from '../Nav/Nav';
import TitleBar from '../TitleBar/TitleBar';
import GroupSection from '../GroupSection/GroupSection';
import RosterSection from '../RosterSection/RosterSection';
import Footer from '../Footer/Footer';
import { Group, GroupName, Person} from '../../utils/groupClass';
import e from 'cors';


function InputPage () {
  let GroupObject = new Group();
  GroupObject.setProjectName("My Project");

  const [aGroupObject, setAGroupObject] = useState(GroupObject);


  // useEffect(() => {
  //   console.log("INPUT PAGE mounted");
  // })

 
  // Title Behavior  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  let updateProjectName = title => {
    console.log('Updating Project Name: ' + title);
    setAGroupObject(aGroupObject => ({...aGroupObject, projectName: title})); 
  }
  

  // Group Section Behavior  = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  let addGroup = () => {
      console.log("addGroup clicked...");

      let tempGroupObject = aGroupObject;
      let tempGroupNames = tempGroupObject.groupNames;
      let newName = "Group " + (tempGroupNames.length + 1); 
      let newGroupName = new GroupName(newName);

      tempGroupNames.push(newGroupName);   
      console.log(tempGroupNames);

      setAGroupObject(aGroupObject => ({...aGroupObject, groupNames: tempGroupNames}));
  }

  let deleteGroup = e => {
    let index = e.target.value;
    console.log("Deleting Group... ", index);
    let tempGroupObject = aGroupObject;
    let newGroupNames = tempGroupObject.groupNames;

    newGroupNames.splice(index, 1);
    setAGroupObject(aGroupObject => ({...aGroupObject, groupNames: newGroupNames}));
  }

  let updateGroupTitle = (title, index) => {
    console.log("Upade Group Title:: \nIndex:", index, "\nValue:", title);

    let newGroupNames = aGroupObject.groupNames;
    newGroupNames[index].name = title;

    setAGroupObject(aGroupObject => ({...aGroupObject, groupNames: newGroupNames}));
  }

  // Footer Button Handler  = = = = = = = = = = = = = = = = = = = = = = = = = = = =
  
  let shuffleData = () => {
    console.log("shuffle clicked...");
    // Shuffle Roster Items randomly
    
    // Assign each roster item a group #
    
    // Save shuffled data as new group object
    saveProject();
    
    // return <Redirect push to={{ pathname: '/results', groupObject: aProjectState, fromInput=true }} />
  }

  let saveProject = () => {
    console.log('saving shuffled project...');
    // let tempGroupObject = aGroupObject;

    // tempGroupObject.projectName = aProjectName;
    // tempGroupObject.groupNames = aGroupNames;
    // // tempGroupObject.persons = aPersons;

    // console.log('new object to save:', tempGroupObject);
    // setAGroupObject(tempGroupObject);
  }

    return (
        <div>
          <header className="App-header">
            <Nav />

            <TitleBar 
              title={aGroupObject.projectName} 
              updateTitle={updateProjectName}
            /> 

          </header>

          <main id="entry-container">
            <GroupSection 
              groupNames={aGroupObject.groupNames}
              addGroup={addGroup}
              deleteGroup={deleteGroup}
              updateGroupTitle={updateGroupTitle}
              // setGroupNames={setAGroupNames}
              // handleChange={handleGroupChange}
              // setGroupNames={(group) => setAGroupNames(group)} 
              />
              
            <RosterSection />
            
          </main>

          <Footer 
            GroupObject={aGroupObject}
            value="Shuffle" 
            text="Shuffle"
            onClick={shuffleData} />
        </div>
    );
  }

export default InputPage;
