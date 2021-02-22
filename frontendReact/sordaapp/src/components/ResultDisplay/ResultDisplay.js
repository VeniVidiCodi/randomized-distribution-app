import React, { Component } from 'react';
// import ResultItem from '../ResultItem/ResultItem';
import GroupCard from '../GroupCard/GroupCard';
import './ResultDisplay.css';


export default class ResultDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
        results: {
            projectName: 'My Great Project',
            uniqueID: '894Z411TL1893',
            accessPassword:'KDF00NX3Z3',
            groupNames: ['Food', 'Drinks', 'Cleanup Crew', 'Music'],
            persons: ['Gary', 'Karen', 'Shanondra', 'Kim', 'Aaron']
            // date: Date.toString()
        }
        // results: [
        //     {projectName: 'My Great Project'},
        //     {uniqueID: '894Z411TL1893'},
        //     {accessPassword:'KDF00NX3Z3'},
        //     {groupNames: ['Food', 'Drinks', 'Cleanup Crew', 'Music']},
        //     {persons: ['Gary', 'Karen', 'Shanondra', 'Kim', 'Aaron']}
        //     // date: Date.toString()
        // ]
    }

  }

  render(){
    const results = this.state.results;
      console.log(results);
    return (
        // <div className="display-wrapper">
        //     {/* Display results from state results object */}
        //     {/* {results.projectName} */}
        //     {/* {results.map((display, value) => 
        //         <h1>{display}: {value}</h1>
        //         // <ResultItem display={display} />
        //     )} */}
            
            
        // </div>

        <div className="group-section">

            <header className="group-nav result-header">
                <div className="group-header-caption">Groups</div>
            </header>

            <div className="group-items-container">
                <div id="groups-display-wrapper">
                    {results.groupNames.map((group) => 
                        <GroupCard 
                            key={group} 
                            title={group} />
                    )}
                </div>
            </div>   
                
        </div>
        );
    }
}