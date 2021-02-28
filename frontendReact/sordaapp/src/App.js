import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import LandingPage from './components/AppPages/LandingPage';
import ResultsPage from './components/AppPages/ResultPage';
import InputPage from './components/AppPages/InputPage';



function App() {

  return (
    <Router>
      <div className="App">
        <Route path='/' exact component={LandingPage}/>
        <Route path='/grouper' exact component={InputPage}/>
        <Route path='/results' exact component={ResultsPage}/>

      </div>
    </Router>
  );
}

export default App;
