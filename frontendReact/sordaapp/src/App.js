// import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import LandingPage from './components/AppPages/LandingPage';
import ResultsPage from './components/AppPages/ResultPage';
import InputPage from './components/AppPages/InputPage';
import NoMatch from './components/AppPages/NoMatch';



function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={LandingPage}/>
          <Route path='/grouper' exact component={InputPage}/>
          <Route path='/results' exact component={ResultsPage}/> 
          
          {/* <Route path='/results' render={<ResultsPage state={this.state}/>}/>  */}
          {/* <Route path='/results' exact render={props => <ResultsPage {...props} state={this.state}/>}/>  */}
          {/* render={props => 
  (<Homepage {...props} pieceOfState={this.state.pieceOfState}/>) */}
  
          <Route component={NoMatch}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
