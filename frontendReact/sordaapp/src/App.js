import React, { Component } from 'react';

import './App.css';

import LandingPage from './components/AppPages/LandingPage';
import ResultsPage from './components/AppPages/ResultPage';
import InputPage from './components/AppPages/InputPage';



function App() {
    return (
      <div className="App">
        <ResultsPage/>
      </div>
    );
}

export default App;
