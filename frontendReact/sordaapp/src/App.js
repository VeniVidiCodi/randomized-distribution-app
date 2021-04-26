import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

import LandingPage from './components/AppPages/LandingPage';
import ResultsPage from './components/AppPages/ResultPage';
import InputPage from './components/AppPages/InputPage';
import NoMatch from './components/AppPages/NoMatch';



function App() {

  return (
    <Router>
      <Switch>
        <div className="App">
          <Route path='/' exact component={LandingPage}/>
          <Route path='/grouper' exact component={InputPage}/>
          <Route path='/results' exact component={ResultsPage}/>
          <Route component={NoMatch}/>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
