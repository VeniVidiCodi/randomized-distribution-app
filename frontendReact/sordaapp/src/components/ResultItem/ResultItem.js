import React, { Component } from 'react';
import './ResultItem.css';

export default class ResultItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    //   title: 'Example Title'
    }

  }

  render(){
    return (
        <div className="result-item-container">
          ResultItem: this.props.display
          <div className="group-list-item">this.props.entry</div>
        </div>
    );
  }
}