import React, { Component } from 'react';
import './NewGroupButton.css';

class NewGroupButton extends Component {
 render() {
    return (
            <div className="group-add--button" onClick={this.props.onClick}>+</div>
    );
 }
}

export default NewGroupButton;