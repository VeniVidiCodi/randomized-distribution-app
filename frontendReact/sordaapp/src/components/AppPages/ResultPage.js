
import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import ResultDisplay from '../ResultDisplay/ResultDisplay';
import Footer from '../Footer/Footer';
import ResultsTitle from '../ResultsTitle/ResultsTitle';
import {Group, Person} from '../../groupClass.js';


export default class ResultsPage extends Component {
  constructor(props) {
    super(props);
    let TempGroupObject = new Group();
    this.state = {
       TempGroupObject: props.location.state
    }

    this.saveProject = this.saveProject.bind(this);
console.log(this.state.TempGroupObject.aGroupObject.projectName);
    console.log(props.location.state);


  }

  saveProject() {
    console.log("SAVE BUTTON CLICKED...");
  }

  render(){
    return (
        <div className="page-wrapper">
          <header>
            <Nav />
            <ResultsTitle title={this.state.TempGroupObject.aGroupObject.projectName}/>
          </header>
          <main id="entry-container">
            <ResultDisplay />
          </main>
            <Footer
              value="Save"
              text="Save"
              onClick={this.saveProject}/>
        </div>
    );
  }
}








/*
import React, { Component, useState } from 'react';
import Nav from '../Nav/Nav';
import ResultDisplay from '../ResultDisplay/ResultDisplay';
import Footer from '../Footer/Footer';
import ResultsTitle from '../ResultsTitle/ResultsTitle';
import {Group, Person} from '../../groupClass.js';


function ResultsPage(props) {
    let TempGroupObject = new Group();
    TempGroupObject = props.location.state;
    const [GroupObject, setGroupObject] = useState(props.location.state);


    console.log(GroupObject.aGroupObject.projectName);
    console.log(TempGroupObject);

    function saveProject() {
      console.log("SAVE BUTTON CLICKED...");
    }

    return (
        <div className="page-wrapper">
          <header>
            <Nav />
            <ResultsTitle title={GroupObject.projectName}/>
          </header>
          <main id="entry-container">
            <ResultDisplay />
          </main>
            <Footer
              value="Save"
              text="Save"
              onClick={()=>saveProject()}/>
        </div>
    );
  }
export default ResultsPage;
*/
