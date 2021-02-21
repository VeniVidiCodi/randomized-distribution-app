import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import TitleBar from './components/TitleBar/TitleBar';
import Footer from './components/Footer/Footer';
import LandingPage from './components/AppPages/LandingPage';
import ResultsPage from './components/AppPages/ResultPage';
import InputPage from './components/AppPages/InputPage';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }

  setTitle(e) {
    console.log("Setting Title");
    // TODO: get input value from TitleBar Component
    let title = e.target.value;
    console.log(title);
    // this.setState({title: title});
    this.setState({title: e.target.value});

  }
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Nav />
          <TitleBar title={this.state.title} setTitle={this.setTitle} />
        </header>

        {/* SETUP/MODIFY ROUTES HERE */}
        <main id="entry-container">
          <LandingPage /> 
          <InputPage />
          <ResultsPage />
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
