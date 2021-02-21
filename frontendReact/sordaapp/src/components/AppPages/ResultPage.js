import React, { Component } from 'react';
import TitleBar from '../TitleBar/TitleBar';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

export default class ResultsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      titled: false
    }

  }

  render(){
    return (
        <div>
          <header className="App-header">
            RESULTS PAGE
            <Nav />
            <TitleBar/>
          </header>

          <main id="entry-container">
            {/* <GroupSection state={this.props.state} /> */}
            {/* <RosterSection /> */}
            <Footer />
          </main>

        </div>
    );
  }
}