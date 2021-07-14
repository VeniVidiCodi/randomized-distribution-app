import React, { Component } from 'react';
import './ResultsTitle.css';

function ResultsTitle(props) {
    return (
            <section className="titlebar project-title-container">
                <h3>Project Name:</h3>
                <h2 className="result-title-display">{props.title}</h2>
                {props.useJson ?
                  <section className="titlebar project-title-container">
                  <h3>Project ID: </h3>
                  <h2 className="result-title-display">{props.accessID}</h2>
                  </section> : ""}
            </section>
    );
  }

export default ResultsTitle;
