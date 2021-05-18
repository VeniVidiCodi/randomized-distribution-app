import React, { useState, useEffect } from 'react';
import Nav from '../Nav/Nav';
import TitleBar from '../TitleBar/TitleBar';
import GroupSection from '../GroupSection/GroupSection';
import RosterSection from '../RosterSection/RosterSection';
import Footer from '../Footer/Footer';
import { Group, GroupName, Person} from '../../utils/groupClass';


function InputPage () {
  let GroupObject = new Group();
  GroupObject.setProjectName("My Project");
  // GroupObject.groupNames = ['food', 'music', 'decor'];

  const [aGroupObject, setAGroupObject] = useState(GroupObject);
  // const [aProjectName, setAProjectName] = useState(GroupObject.projectName);
  const [aGroupNames, setAGroupNames] = useState(GroupObject.groupNames);
  // const [aPersons, setAPersons] = useState(GroupObject.persons);
  
  // const [showTitle, setShowTitle] = useState(true);


  // Emulate componentDidMount lifecycle(s)  = = = = = = = = = = = = = = = = = = = = =
  
  // useEffect(() => {
  //     console.log("use effect group state");
  //     // updateTitle("My Project");
  
  //   // aGroupObject.setProjectName("bbb");
    
  // })

  // useEffect(() => {
  //   console.log("use effect project name");
  // }, [aProjectName])

  // useEffect(() => {
  //   console.log("use effect group names");
  // }, [aGroupNames])
 
   
  // Title Behavior  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  // let handleChange = (event) => {
  //   console.log('Handling Change: ' + event.target.value);
  //   // this.setState({title: event.target.value});
  //   setAProjectName(event.target.value);
  // }
  
  // let handleSubmit = (event) => {
  //   console.log('Submitting title: ' + event.target.value);
  //   // event.preventDefault();
  //   // props.setTitle
  //   toggleTitle();
  // }

  // let toggleTitle = () => {
  //   console.log("Toggling Title" );
  //   if (showTitle) {
  //       console.log("T -> F");
  //       setShowTitle(false);
  //       // this.setState({showTitle: false})
  //     } else {
  //       console.log("F -> T");
  //       setShowTitle(true);
  //       // this.setState({showTitle: true})
  //     };
  // }

  let updateTitle = title => {
    console.log('Updating Project Name: ' + title);
    let tempGroupObj = aGroupObject;

    tempGroupObj.projectName = title;   // This is replacing title value constantly. should be adding
    console.log(tempGroupObj.projectName);

    setAGroupObject(aGroupObject => ({...aGroupObject, projectName:title}));
  }
  


  // Group Section Behavior  = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  // let handleGroupsChange = newGroupsArr => {
  //   console.log('setNewGroupsArr:', newGroupsArr);
  //   setAGroupNames(newGroupsArr); 
  // }

  // let createNewGroup = () => { 
  //   let length = aGroupNames.length;
  //   let name = "Group " + (length + 1);
  //   console.log(name);
  //   return name;
  // }

  // let addGroup = () => {
  //   console.log("addGroup clicked...");

  //   let tempGroupNames = aGroupNames;
  //   let newGroup = createNewGroup();
  //   tempGroupNames.push(newGroup);
  //   console.log(tempGroupNames);

  //   setAGroupNames(tempGroupNames);
  // }


    let addGroup = () => {
        console.log("addGroup clicked...");
        let tempGroupObj = aGroupObject;
        let newGroup = "Group " + (aGroupNames.length + 1); 
        tempGroupObj.addGroupNames(new GroupName(newGroup));
        // setAGroupNames(aGroupNames => [...aGroupNames, newGroup]);
        setAGroupObject(tempGroupObj);
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
              updateTitle={updateTitle}
            /> 

          </header>

          <main id="entry-container">
            <GroupSection 
              groupNames={aGroupNames}
              setGroupNames={setAGroupNames}
              addGroup={addGroup}
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
