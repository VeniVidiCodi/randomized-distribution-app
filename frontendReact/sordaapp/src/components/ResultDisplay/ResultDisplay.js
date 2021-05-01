import React, { Component } from 'react';
// import ResultItem from '../ResultItem/ResultItem';
import ResultCard from '../ResultCard/ResultCard.js';
import './ResultDisplay.css';
import { nanoid } from 'nanoid';

export default class ResultDisplay extends Component {
  constructor(props) {
    super(props);
    console.log(props.grpObject);
    this.state = {
      aGroupObject: props.grpObject
    }
    console.log(this.state.aGroupObject.getProjectName());
  }


  render(){
    return (
        <div className="results-section">

            <header className="results-section-header">
                <div className="results-header-caption">Groups</div>
            </header>

            <div className="results-items-container">
                    {this.state.aGroupObject.getGroupNames().map((group, index) =>
                        <ResultCard
                            key={nanoid()}
                            title={group.name}
                            groupNumber={index}
                            persons={this.state.aGroupObject.persons} />
                    )}
            </div>

        </div>
        );
    }
}
