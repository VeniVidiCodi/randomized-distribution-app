import React, { Component } from 'react';
import './ResultItem.css';

export default function ResultItem (props) {
  return (
      <div className="result-item-container">
        ResultItem: props.display
        <div className="group-list-item">props.entry</div>
      </div>
  );
}