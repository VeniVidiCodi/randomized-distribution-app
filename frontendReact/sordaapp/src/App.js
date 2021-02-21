import React, { Component } from 'react';
import './App.css';

import LandingPage from './components/AppPages/LandingPage';
import ResultsPage from './components/AppPages/ResultPage';
import InputPage from './components/AppPages/InputPage';



export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="App">
        
        {/* SETUP/MODIFY ROUTES HERE */}
          {/* <LandingPage />  */}
          <InputPage />
          {/* <ResultsPage /> */}

      </div>
    );
  }
}