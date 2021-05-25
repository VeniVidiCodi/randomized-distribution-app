import React, { useState } from 'react';
import {Redirect} from 'react-router-dom';
import Nav from '../Nav/Nav';
import TitleBar from '../TitleBar/TitleBar';
import GroupSection from '../GroupSection/GroupSection';
import RosterSection from '../RosterSection/RosterSection';
import Footer from '../Footer/Footer';
import { Group, GroupName, Person } from '../../utils/groupClass';
import e from 'cors';


function InputPage () {
  let GroupObject = new Group();
  GroupObject.setProjectName("My Project");

  const [aGroupObject, setAGroupObject] = useState(GroupObject);
  const [saveClick, setSaveClick] = useState(false);


  // Title Behavior  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  let updateProjectName = title => {
    // console.log('Updating Project Name: ' + title);
    setAGroupObject(aGroupObject => ({...aGroupObject, projectName: title})); 
  }
  

  // Group Section Behavior  = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  let addGroup = () => {
      // console.log("addGroup clicked...");

      let tempGroupObject = aGroupObject;
      let tempGroupNames = tempGroupObject.groupNames;
      let newName = "Group " + (tempGroupNames.length + 1); 
      let newGroupName = new GroupName(newName, null);

      tempGroupNames.push(newGroupName);   
      // console.log(tempGroupNames);

      setAGroupObject(aGroupObject => ({...aGroupObject, groupNames: tempGroupNames}));
  }

  let deleteGroup = e => {
    let index = e.target.value;
    // console.log("Deleting Group... ", index);
    let tempGroupObject = aGroupObject;
    let newGroupNames = tempGroupObject.groupNames;

    newGroupNames.splice(index, 1);
    setAGroupObject(aGroupObject => ({...aGroupObject, groupNames: newGroupNames}));
  }

  let updateGroupTitle = (title, index) => {
    // console.log("Upade Group Title:: \nIndex:", index, "\nValue:", title);

    let newGroupNames = aGroupObject.groupNames;
    newGroupNames[index].name = title;

    setAGroupObject(aGroupObject => ({...aGroupObject, groupNames: newGroupNames}));
  }


  // Roster Section Behavior  = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  let addItem = () => {
      // console.log("addItem clicked...");

      // let tempGroupObject = aGroupObject;
      let tempItemList = aGroupObject.persons;
      let newItemName = "item " + (tempItemList.length + 1); 
      let newItem = new Person(newItemName, null);

      tempItemList.push(newItem);   
      console.log(tempItemList);

      setAGroupObject(aGroupObject => ({...aGroupObject, persons: tempItemList}));
  }

  let deleteItem = e => {
    let index = e.target.value;
    // console.log("Deleting Roster Item... ", index);
    let tempGroupObject = aGroupObject;
    let newItemsList = tempGroupObject.persons;

    newItemsList.splice(index, 1);
    setAGroupObject(aGroupObject => ({...aGroupObject, persons: newItemsList}));
  }

  let updateItemName = (title, index) => {
    // console.log("Update Roster Name:: \nIndex:", index, "\nValue:", title);

    let newItemsList = aGroupObject.persons;
    newItemsList[index].name = title;

    setAGroupObject(aGroupObject => ({...aGroupObject, persons: newItemsList}));
  }


  // Footer Button Handler  = = = = = = = = = = = = = = = = = = = = = = = = = = = =
  
  let shuffleData = () => {
    console.log("shuffle clicked ...");
    // Check that qty of groups < qty of persons
    let numOfGroups = aGroupObject.groupNames.length;
    let numOfPersons = aGroupObject.persons.length;
    console.log("groups:", numOfGroups);
    console.log("persons:", numOfPersons);
    // Find how many rounds can be 
    // for (item in )
    // Assign each roster item a group #
    
    // Save shuffled data as new group object
    // saveProject();
    
    // return <Redirect push to={{ pathname: '/results', groupObject: aProjectState, fromInput=true }} />
  }

  let saveProject = () => {
    console.log('saving ...');
    shuffleData();
    // setSaveClick(true);
    // let tempGroupObject = aGroupObject;

    // tempGroupObject.projectName = aProjectName;
    // tempGroupObject.groupNames = aGroupNames;
    // // tempGroupObject.persons = aPersons;

    // console.log('new object to save:', tempGroupObject);
    // setAGroupObject(tempGroupObject);
  }

  let editProject = () => {
    console.log('editProject clicked ...');
    
  }

  if (saveClick) {
    return <Redirect push to={{pathname: '/results', GroupObject: aGroupObject, isTrue: false}}/>;
  }

  return (
      <div>
        <header className="App-header">
          <Nav />
          <TitleBar 
            title={aGroupObject.projectName} 
            updateTitle={updateProjectName} /> 
        </header>
        <main id="entry-container">
          <GroupSection 
            groupNames={aGroupObject.groupNames}
            addGroup={addGroup}
            deleteGroup={deleteGroup}
            updateGroupTitle={updateGroupTitle} />
          <RosterSection 
            rosterItems={aGroupObject.persons}
            addItem={addItem}
            deleteItem={deleteItem}
            updateItemName={updateItemName} />
        </main>
          <Footer 
            GroupObject={aGroupObject}
            onClickShuffle={shuffleData}
            onClickSave={saveProject}
            onClickEdit={editProject}
            />
      </div>
    );
  }

export default InputPage;
