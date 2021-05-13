import React, { Component } from 'react';
import './ResultsTitle.css';

function ResultsTitle(props) {
    return (
            <section className="titlebar project-title-container">
                <h3>Project Name:</h3> 
                <h2 className="result-title-display">{props.title}</h2>
            </section>
    );
  }

export default ResultsTitle;
