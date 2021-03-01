import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import TitleBar from '../TitleBar/TitleBar';
import GroupSection from '../GroupSection/GroupSection';
import RosterSection from '../RosterSection/RosterSection';
import Footer from '../Footer/Footer';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
    this.shuffleData = this.shuffleData.bind(this);
    this.setTitle = this.setTitle.bind(this);
  }

  shuffleData() {
    console.log("SHUFFLING...");
  }

  setTitle(e) {
    console.log("Setting Title");
    // TODO: get input value from TitleBar Component
    let title = e.target.value;
    console.log(title);
    this.setState({title: title});
    // this.setState({title: e.target.value});
  }


  render(){
    return (
        <div>
          <header className="App-header">
            <Nav />
            <TitleBar/>
          </header>

          <main id="entry-container">
            <GroupSection state={this.props.state} />
            <RosterSection />
          </main>

          <Footer 
              value="Shuffle" 
              text="Shuffle"
              onClick={this.shuffleData}/>
        </div>
    );
  }
}

export default Input;
