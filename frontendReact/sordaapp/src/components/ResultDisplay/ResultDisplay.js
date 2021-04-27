import React, { Component } from 'react';
// import ResultItem from '../ResultItem/ResultItem';
import ResultCard from '../ResultCard/ResultCard.js';
import './ResultDisplay.css';

export default class ResultDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
            projectName: 'My Great Project',
            uniqueID: '894Z411TL1893',
            accessPassword:'KDF00NX3Z3',
            groupNames: ['Food', 'Drinks', 'Cleanup Crew', 'Music'],
            persons: [
                {name:'Gary', groupNumber: 0}, 
                {name: 'Karen', groupNumber: 1},
                {name: 'Shanondra', groupNumber: 2},
                {name: 'Kim', groupNumber: 3},
                {name: 'Kenly', groupNumber: 1},
            ]
    }

  }

  render(){
    return (
        <div className="results-section">

            <header className="results-section-header">
                <div className="results-header-caption">Groups</div>
            </header>

            <div className="results-items-container">
                    {this.state.groupNames.map((group, index) => 
                        <ResultCard 
                            key={group} 
                            title={group}
                            groupNumber={index}
                            persons={this.state.persons} />
                    )}
            </div>   
                
        </div>
        );
    }
}