import React, { useEffect, useState } from 'react';
import {Link, Redirect} from 'react-router-dom';
import logo from '../../mallard.svg';
import './LandingPage.css';
import {Group, Person} from '../../groupClass.js';




function LandingPage() {

  const [aJson, setAjson] = useState(null);
  const [ifFetchSuccess, setIfFetchSuccess] = useState(false);
  const [idNum, setIdNum] = useState("");

/*
  function setGroupFromCall(json){
    let tempGroup = aGroupObject;
    tempGroup.persons = json.persons;
    tempGroup.groupNames = json.groupNames;
    tempGroup.projectName = json.projectName;
    setGroupObject(tempGroup);
    console.log(aGroupObject.projectName);
  }
*/

  async function getGroup() {
    await fetch(`http://localhost:3050/group/${idNum}`)
      .then(res => res.json())
      .then(json => {
        if(json !== null) {
          console.log(json);
          setAjson(json);
          console.log(aJson);
          //setGroupFromCall(json);

          setIfFetchSuccess(true);
        }
        else {
          console.log("No Project returned; Object:null");
        }
      })
      .catch(e => {
        console.log("Error");
      })
  }

  function handleSubmit(event) {
    getGroup();
    event.preventDefault();

  }

  function handleChange(event) {
    const tempIdNum = event.target.value;
    setIdNum(tempIdNum);
    event.preventDefault();
  }

  if(ifFetchSuccess) {
    return <Redirect push to={{pathname: '/results', json: aJson, isTrue: true}}/>;
  }
//return <Redirect push to={{pathname: '/results', GroupObject: aGroupObject, isTrue: false}}/>;
  return (
    <div className="wrapper">
      <div className="topSection">
        <img src={logo} alt="duck logo" />
      </div>

      <div className="bottomSection">
        <div className="buttonChild">
          <Link to="/grouper">
            <button type="submit" value="Submit" id="btn-start">Create Group</button>
          </Link>
        </div>

        <div className="inputChild">
          <form onSubmit={handleSubmit}>
            <input
              value={idNum}
              onChange={handleChange}
              type="text"
              name="AccessID"
              placeholder="Enter ID"
              className="textField"
              maxLength="7" />
            <button type="submit" name="getResultsPage" className="submit">GO</button>
          </form>
        </div>

      </div>
    </div>
  );
}


export default LandingPage;



/*
import React, { useEffect, useState } from 'react';
import {Link, Redirect} from 'react-router-dom';
import logo from '../../mallard.svg';
import './LandingPage.css';
import {Group, Person} from '../../groupClass.js';




function LandingPage() {
  let GroupObject = new Group();
  const [aGroupObject, setGroupObject] = useState(GroupObject);
  const [aJson, setAjson] = useState(null);
  const [ifFetchSuccess, setIfFetchSuccess] = useState(false);
  const [idNum, setIdNum] = useState("");


  function setGroupFromCall(json){
    let tempGroup = aGroupObject;
    tempGroup.persons = json.persons;
    tempGroup.groupNames = json.groupNames;
    tempGroup.projectName = json.projectName;
    setGroupObject(tempGroup);
    console.log(aGroupObject.projectName);
  }


  async function getGroup() {
    await fetch(`http://localhost:3050/group/${idNum}`)
      .then(res => res.json())
      .then(json => {
        if(json !== null) {
          console.log(json);
          setAjson(json);
          console.log(aJson);
          //setGroupFromCall(json);

          setIfFetchSuccess(true);
        }
        else {
          console.log("No Project returned; Object:null");
        }
      })
      .catch(e => {
        console.log("Error");
      })
  }

  function handleSubmit(event) {
    getGroup();
    event.preventDefault();

  }

  function handleChange(event) {
    const tempIdNum = event.target.value;
    setIdNum(tempIdNum);
    event.preventDefault();
  }

  if(ifFetchSuccess) {
    return <Redirect push to={{pathname: '/results', state: {aJson}}}/>;
  }

  return (
    <div className="wrapper">
      <div className="topSection">
        <img src={logo} alt="duck logo" />
      </div>

      <div className="bottomSection">
        <div className="buttonChild">
          <Link to="/grouper">
            <button type="submit" value="Submit" id="btn-start">Create Group</button>
          </Link>
        </div>

        <div className="inputChild">
          <form onSubmit={handleSubmit}>
            <input
              value={idNum}
              onChange={handleChange}
              type="text"
              name="AccessID"
              placeholder="Enter ID"
              className="textField"
              maxLength="7" />
            <button type="submit" name="getResultsPage" className="submit">GO</button>
          </form>
        </div>

      </div>
    </div>
  );
}


export default LandingPage;

*/
