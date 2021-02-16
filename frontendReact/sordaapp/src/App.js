import React, { Component } from 'react';
import logo from './mallard.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import TitleBar from './components/TitleBar/TitleBar';
import GroupSection from './components/GroupSection/GroupSection';
import RosterSection from './components/RosterSection/RosterSection';
import Footer from './components/Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // title: "BOB",
      title: null,
      titled: false,
    }
    this.setTitle = this.setTitle.bind(this);
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
          <Nav logo={logo} />
          <TitleBar title={this.state.title} setTitle={this.setTitle} />
        </header>
        <main id="entry-container">
          <GroupSection state={this.state} />
          <RosterSection />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
