import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import logo from '../../mallard.svg';
import './LandingPage.css';
import { getRequest } from "../../utils/queries.js";

// DB Try to fetch an example entry with password: 7JWHR5
// 3QQOG3  retreives data

function LandingPage() {

  const [aJson, setAjson] = useState(null);
  const [ifFetchSuccess, setIfFetchSuccess] = useState(false);
  const [idNum, setIdNum] = useState("");


  async function getGroup() {
     const json = await getRequest(idNum);  //call the API to get the user data
      if(json !== null) {
        console.log(json);
        setAjson(json);
        setIfFetchSuccess(true);
      } else {
        console.log("No Project returned; Object:null");
      }
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
    return <Redirect push to={{pathname: '/results', json: aJson, fromLandingPage: true, fromInputPage: false}}/>;
    // return <Redirect push to={{pathname: '/results', json: aJson, isTrue: true}}/>;
  }
//return <Redirect push to={{pathname: '/results', GroupObject: aGroupObject, isTrue: false}}/>;  //use in input page


    return (
      <div className="wrapper">
        <div className="topSection">
          <img src={logo} alt="duck logo" />
        </div>

        <div className="bottomSection">
          <div className="buttonChild">
            <Link to={{pathname: '/grouper', fromLandingPage: true, fromInputPage: false}}>
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
  async function getGroup() {
    await fetch(`http://localhost:3050/group/${idNum}`)
      .then(res => res.json())
      .then(json => {
        if(json !== null) {
          console.log(json);
          setAjson(json);
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
*/
