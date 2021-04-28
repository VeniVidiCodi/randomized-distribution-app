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
      projectName: this.props.location.state.projectName,
      groups: this.props.location.state.groups,
      persons: this.props.location.state.persons
    }
    this.shuffleData = this.shuffleData.bind(this);
    // this.setProjectTitle = this.setProjectTitle.bind(this);
  }

  shuffleData() {
    console.log("SHUFFLING...");
    // Shuffle Roster Items randomly
    // Assign each roster item a group #
    let projectName = this.state.projectName;
    console.log(projectName);
  }
 

  // setProjectTitle(e) {
  //   console.log("Setting new title >>>", e.target.value);
  //   // this.setState({projectName: e.target.value});
  // }


  render(){
    return (
        <div>
          <header className="App-header">
            <Nav />
            <TitleBar/> 
            {this.state.projectName}
          </header>
          <main id="entry-container">
            <GroupSection state={this.state} />
            <RosterSection />
          </main>
          <Footer 
            state={this.props.state}
            value="Shuffle" 
            text="Shuffle"
            onClick={this.shuffleData}/>
        </div>
    );
  }
}

export default Input;
