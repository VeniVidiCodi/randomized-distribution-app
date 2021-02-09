import React, { Component } from 'react';
import logo from './mallard.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import TitleBar from './components/TitleBar/TitleBar';
import GroupSection from './components/GroupSection/GroupSection';
import RosterSection from './components/RosterSection/RosterSection';
import Footer from './components/Footer/Footer';

class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Nav logo={logo} />
          {/* Conditional: Title or Input? */}
          <TitleBar />
        </header>
        <main id="entry-container">
          <GroupSection />
          <RosterSection />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
