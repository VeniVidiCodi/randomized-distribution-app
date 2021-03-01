import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import ResultDisplay from '../ResultDisplay/ResultDisplay';
import Footer from '../Footer/Footer';
import ResultsTitle from '../ResultsTitle/ResultsTitle';


export default class ResultsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Example Title'
    }
    this.saveProject = this.saveProject.bind(this);
  }

  saveProject() {
    console.log("SAVE BUTTON CLICKED...");
  }
  
  render(){
    return (
        <div className="page-wrapper">
            <Nav />
            <ResultsTitle title={this.state.title}/>
            <ResultDisplay />
            <Footer 
              value="Save" 
              text="Save"
              onClick={this.saveProject}/>
        </div>
    );
  }
}