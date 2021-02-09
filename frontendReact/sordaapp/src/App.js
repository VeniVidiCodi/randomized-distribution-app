import React, { Component } from 'react';
import logo from './mallard.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import TitleBar from './components/TitleBar/TitleBar';
import GroupSection from './components/GroupSection/GroupSection';
import RosterSection from './components/RosterSection/RosterSection';
import Footer from './components/Footer/Footer';

class App extends Component {
  state = {
            max: 8,
            min: 2,
            // menuButtons: [2, 3, 4, 5, 6, 7, 8],
            menuButtons: [],
            // renderButtons: () => {
            //     for (let i=this.min; i<this.max; i++) {
            //         this.menuButtons.push(i);
            //     }
            // },
            showGroupMenu: true,
            projectName: "Grouper",
            groups: [
                // {groupName: "Group 1", id: 0}
            ], 
            rosterItems: [
                // {"Kenly": 1},
                // {"Victor" : 2}
            ] 
        }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Nav logo={logo} />
          {/* Conditional: Title or Input? */}
          <TitleBar />
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
