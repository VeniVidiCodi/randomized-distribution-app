import React, { useState } from 'react';
import {Redirect} from 'react-router-dom';
import Nav from '../Nav/Nav';
import TitleBar from '../TitleBar/TitleBar';
import GroupSection from '../GroupSection/GroupSection';
import RosterSection from '../RosterSection/RosterSection';
import Footer from '../Footer/Footer';
import { Group, GroupName, Person } from '../../utils/groupClass';
import e from 'cors';


function InputPage (props) {

  let GroupObject = new Group();

  if (props.location.fromResultPage) {
    GroupObject = () => {
       let tempGroup = new Group();
       tempGroup.persons = props.location.json.persons;
       tempGroup.groupNames = props.location.json.groupNames;
       tempGroup.setProjectName(props.location.json.projectName);

       return tempGroup;
     }
   } else {
     GroupObject.setProjectName("My Project");
   }
  

   // –––––––
   //  State
   // –––––––

  const [aGroupObject, setAGroupObject] = useState(GroupObject);
  const [saveClick, setSaveClick] = useState(false);


  // Title Behavior  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  const updateProjectName = title => {
    // console.log('Updating Project Name: ' + title);
    setAGroupObject(aGroupObject => ({...aGroupObject, projectName: title})); 
  }
  

  // Group Section Behavior  = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  const addGroup = () => {
      // console.log("addGroup clicked...");
      let tempGroupObject = aGroupObject;
      let tempGroupNames = tempGroupObject.groupNames;
      let newName = "Group " + (tempGroupNames.length + 1); 
      let newGroupName = new GroupName(newName, null);

      tempGroupNames.push(newGroupName);   
      // console.log(tempGroupNames);

      setAGroupObject(aGroupObject => ({...aGroupObject, groupNames: tempGroupNames}));
  }

  const deleteGroup = e => {
    let index = e.target.value;
    // console.log("Deleting Group... ", index);
    let tempGroupObject = aGroupObject;
    let newGroupNames = tempGroupObject.groupNames;

    newGroupNames.splice(index, 1);
    setAGroupObject(aGroupObject => ({...aGroupObject, groupNames: newGroupNames}));
  }

  const updateGroupTitle = (title, index) => {
    // console.log("Upade Group Title:: \nIndex:", index, "\nValue:", title);

    let newGroupNames = aGroupObject.groupNames;
    newGroupNames[index].name = title;

    setAGroupObject(aGroupObject => ({...aGroupObject, groupNames: newGroupNames}));
  }


  // Roster Section Behavior  = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  const addItem = () => {
      // console.log("addItem clicked...");

      // let tempGroupObject = aGroupObject;
      let tempItemList = aGroupObject.persons;
      let newItemName = "item " + (tempItemList.length + 1); 
      let newItem = new Person(newItemName, null);

      tempItemList.push(newItem);   
      // console.log(tempItemList);

      setAGroupObject(aGroupObject => ({...aGroupObject, persons: tempItemList}));
  }

  const deleteItem = e => {
    let index = e.target.value;
    // console.log("Deleting Roster Item... ", index);
    let tempGroupObject = aGroupObject;
    let newItemsList = tempGroupObject.persons;

    newItemsList.splice(index, 1);
    setAGroupObject(aGroupObject => ({...aGroupObject, persons: newItemsList}));
  }

  const updateItemName = (title, index) => {
    // console.log("Update Roster Name:: \nIndex:", index, "\nValue:", title);

    let newItemsList = aGroupObject.persons;
    newItemsList[index].name = title;

    setAGroupObject(aGroupObject => ({...aGroupObject, persons: newItemsList}));
  }


  // Footer Button Handler Functions  = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      // console.log('CYCLE', i);
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    // console.log(array);  // shuffled results
  }
  

  const shuffleProject = () => {
    console.log("shuffle clicked ...");
    // Check that qty of groups < qty of persons
    let tempGroupObject = aGroupObject;
    let groups = aGroupObject.groupNames;
    let persons = aGroupObject.persons;
    // let assignedPersons = persons;  // copy of persons array
    let numOfGroups = groups.length;
    let numOfPersons = persons.length;
    // console.log("groups:", numOfGroups);
    // console.log("persons:", numOfPersons);

    // Initial input submission validity checks
    if (numOfGroups === 0) {
      alert("Shuffle cannot be performed with no groups. Please add more groups.");
      return;
    }
    if (numOfPersons === 0) {
      alert("Shuffle cannot be performed with no roster items. Please add more roster items.");
      return;
    }
    if (numOfGroups > numOfPersons) {
      alert("There must be more groups than roster items.");
      return;
    } else {
      // console.log("ok");
      shuffleArray(persons);
    }

    let count = numOfPersons;

    do {
      console.log("PERSON COUNTDOWN:", count);

      // for (let i=0; i<numOfGroups; i++) {
        let person = persons[count - 1];
        // console.log("PERSON:", person);
        // // let groupIndex = i;

        // console.log("GROUP CYCLE");
        // console.log("GROUP:", groups[groupIndex], "\nindex:", groupIndex);

        person.groupNum = count % (numOfGroups) + 1;  // 2, 1, 3 
        count--; 
      // }
    } while (count > 0)
    // console.log(persons);
    tempGroupObject.persons = persons;
    return tempGroupObject;
    
    // SAVE SHUFFLED DATA AS NEW GROUP OBJECT
    // saveProject();
    
    // PASS STATE TO  AND LOAD THE RESULTS PAGE
    // return <Redirect push to={{ pathname: '/results', groupObject: aProjectState, fromInput=true }} />
  }

  const saveProject = () => {
    console.log('saving ...');
    let assignedResults = shuffleProject();
    console.log('RESULTS:', assignedResults);
    setSaveClick(true);
    // let tempGroupObject = aGroupObject;

    // tempGroupObject.projectName = aProjectName;
    // tempGroupObject.groupNames = aGroupNames;
    // // tempGroupObject.persons = aPersons;

    // console.log('new object to save:', tempGroupObject);
    // setAGroupObject(tempGroupObject);
  }

  const editProject = () => {
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
            onClickShuffle={shuffleProject}
            onClickSave={saveProject}
            onClickEdit={editProject}
            />
      </div>
    );
  }

export default InputPage;
