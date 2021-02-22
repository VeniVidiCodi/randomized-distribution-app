import React, { Component } from 'react';
import TitleBar from '../TitleBar/TitleBar';
import Nav from '../Nav/Nav';
import ResultDisplay from '../ResultDisplay/ResultDisplay';
import Footer from '../Footer/Footer';
import GroupSection from '../GroupSection/GroupSection';

export default class ResultsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Example Title'
    }

  }

  render(){
    return (
        <div className="page-wrapper">
            <Nav />
            RESULTS PAGE
            <TitleBar title={this.state.title}/>
            <ResultDisplay />
            <Footer />
        </div>
    );
  }
}