import React, { Component } from 'react';
// import ResultItem from '../ResultItem/ResultItem';
import ResultCard from '../ResultCard/ResultCard.js';
import './ResultDisplay.css';
import { nanoid } from 'nanoid';

export default function ResultDisplay (props) {
//   console.log(props.groupObject);

  return (
      <div className="results-section">

          <header className="results-section-header">
              <div className="results-header-caption">Groups</div>
          </header>

          <div className="results-items-container">
                  {/* {this.state.aGroupObject.getGroupNames().map((group, index) => */}
                  {props.groupObject.groupNames.map((group, index) =>
                      <ResultCard
                          key={nanoid()}
                          title={group.name}
                          groupNumber={index}
                          persons={props.groupObject.persons} 
                          // persons={this.state.aGroupObject.persons} 
                      />
                  )}
          </div>

      </div>
      );
}