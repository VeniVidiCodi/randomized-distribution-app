import React, { Component } from 'react';
import TitleBar from '../TitleBar/TitleBar';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

export default class ResultsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Example Title'
    }

  }

  render(){
    return (
        <div>
          <header className="App-header">
            RESULTS PAGE
            <Nav />
            <TitleBar title={this.state.title}/>
          </header>

          {/* <main id="entry-container">
          </main> */}
            <Footer />

        </div>
    );
  }
}