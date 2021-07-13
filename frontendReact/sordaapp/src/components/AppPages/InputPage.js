import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Nav from '../Nav/Nav';
import TitleBar from '../TitleBar/TitleBar';
import GroupSection from '../GroupSection/GroupSection';
import RosterSection from '../RosterSection/RosterSection';
import Footer from '../Footer/Footer';
import { Group, GroupName, Person } from '../../utils/groupClass';
import './InputPage.css';
// import e from 'cors';


function InputPage (props) {

  let GroupObject = new Group();

  if (props.location.fromResultPage) {
    // console.log('json/grpObj', typeof(props.location.json), '/', typeof(props.location.GroupObject));

    if (typeof props.location.GroupObject !== 'undefined') {
      // console.log('do groupObj');
      GroupObject = props.location.GroupObject;
    } else {
      // console.log('do json');
      GroupObject = () => {
        let tempGroup = new Group();
        tempGroup.persons = props.location.json.persons;
        tempGroup.groupNames = props.location.json.groupNames;
        tempGroup.setProjectName(props.location.json.projectName);

        return tempGroup;
      }
    }
  } else {
    GroupObject.setProjectName("My Project Name");
  }


  // –––––––
  //  State
  // –––––––

  const [aGroupObject, setAGroupObject] = useState(GroupObject);
  const [shuffleClick, setShuffleClick] = useState(false);
  // const [fromLandingPage, setFromLandingPage] = useState(props.location.fromLandingPage);
  // const [fromResultPage, setFromResultPage] = useState(props.location.fromResultPage);

  // Check console to see from which page is being received
  // console.log("FROM LANDING:", fromLandingPage);
  // console.log("FROM RESULTS:", fromResultPage);


  // –––––––
  // Title Behavior
  // –––––––

  const updateProjectName = title => {
    setAGroupObject(aGroupObject => ({...aGroupObject, projectName: title}));
  }

  // –––––––
  // Group Section Behavior
  // –––––––

  const addGroup = () => {
      let tempGroupObject = aGroupObject;
      let tempGroupNames = tempGroupObject.groupNames;
      let newName = "Group " + (tempGroupNames.length + 1);
      let newGroupName = new GroupName(newName, null);

      tempGroupNames.push(newGroupName);
      setAGroupObject(aGroupObject => ({...aGroupObject, groupNames: tempGroupNames}));
  }

  const deleteGroup = e => {
    let index = e.target.value;
    let tempGroupObject = aGroupObject;
    let newGroupNames = tempGroupObject.groupNames;

    newGroupNames.splice(index, 1);
    setAGroupObject(aGroupObject => ({...aGroupObject, groupNames: newGroupNames}));
  }

  const updateGroupTitle = (title, index) => {
    let newGroupNames = aGroupObject.groupNames;
    newGroupNames[index].name = title;

    setAGroupObject(aGroupObject => ({...aGroupObject, groupNames: newGroupNames}));
  }

  // –––––––
  // Roster Section Behavior
  // –––––––

  const addItem = () => {
      let tempItemList = aGroupObject.persons;
      let newItemName = "Item " + (tempItemList.length + 1);
      let newItem = new Person(newItemName, null);

      tempItemList.push(newItem);
      setAGroupObject(aGroupObject => ({...aGroupObject, persons: tempItemList}));
  }

  const deleteItem = e => {
    let index = e.target.value;
    let tempGroupObject = aGroupObject;
    let newItemsList = tempGroupObject.persons;

    newItemsList.splice(index, 1);
    setAGroupObject(aGroupObject => ({...aGroupObject, persons: newItemsList}));
  }

  const updateItemName = (title, index) => {
    let newItemsList = aGroupObject.persons;
    newItemsList[index].name = title;

    setAGroupObject(aGroupObject => ({...aGroupObject, persons: newItemsList}));
  }

  // –––––––
  // Footer Button Handler Functions
  // –––––––

  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }


  const shuffleProject = () => {
    // console.log("shuffle clicked ...");

    let tempGroupObject = aGroupObject;
    let groups = aGroupObject.groupNames;
    let persons = aGroupObject.persons;
    let numOfGroups = groups.length;
    let numOfPersons = persons.length;

    // Input validity checks
    if (numOfGroups === 0) {
      alert("Shuffle cannot be performed with no groups. Please add more groups.");
      return false;
    }
    if (numOfPersons === 0) {
      alert("Shuffle cannot be performed with no roster items. Please add more roster items.");
      return false;
    }
    if (numOfGroups > numOfPersons) {
      alert("There must be more groups than roster items.");
      return false;
    } else {
      shuffleArray(persons);
      let count = numOfPersons;

      do {
        // console.log("PERSON COUNTDOWN:", count);
        let person = persons[count - 1];
        person.groupNum = count % (numOfGroups) + 1;
        count--;
      } while (count > 0)

      setShuffleClick(true);
      tempGroupObject.persons = persons;
      return tempGroupObject;
    }
  }


  if (shuffleClick) {
    return <Redirect push to={{pathname: '/results', GroupObject: aGroupObject, fromInputPage: true, fromLandingPage: false}}/>;
  }

  return (
      <div className="main-wrapper">
        <div className="content">
          <header className="app-header">
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
        </div>
        <Footer
          GroupObject={aGroupObject}
          onClickShuffle={shuffleProject}
          fromResultPage={props.location.fromResultPage}
          /*fromLandingPage={props.location.fromLandingPage}*/
          />
      </div>
    );
  }

export default InputPage;
