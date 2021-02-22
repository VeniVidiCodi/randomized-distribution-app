import React, { Component } from 'react';
// import ResultItem from '../ResultItem/ResultItem';
import GroupCard from '../GroupCard/GroupCard';
import './ResultDisplay.css';


export default class ResultDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
        // results: {
            projectName: 'My Great Project',
            uniqueID: '894Z411TL1893',
            accessPassword:'KDF00NX3Z3',
            groupNames: ['Food', 'Drinks', 'Cleanup Crew', 'Music'],
            persons: [
                {name:'Gary', groupNumber: 0}, 
                {name: 'Karen', groupNumber: 1},
                {name: 'Shanondra', groupNumber: 2},
                {name: 'Kim', groupNumber: 3},
                // {name: 'Aaron', groupNumber: null},
            ]
            // date: Date.toString()
        }
    // }

  }

  render(){
    return (
        <div className="group-section">

            <header className="group-nav result-header">
                <div className="group-header-caption">Groups</div>
            </header>

            <div className="group-items-container">
                <div id="groups-display-wrapper">
                    {this.state.groupNames.map((group, index) => 
                        <GroupCard 
                            key={group} 
                            title={group}
                            persons={this.state.persons} />
                    )}
                </div>
            </div>   
                
        </div>
        );
    }
}