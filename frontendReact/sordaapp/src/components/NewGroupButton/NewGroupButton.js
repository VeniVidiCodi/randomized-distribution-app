import React, { Component } from 'react';
import './NewGroupButton.css';

class NewGroupButton extends Component {
 render() {
    return (
        <div className="group-item--new">
            <div className="group-add--button" onClick={this.props.onClick}>+</div>
            <div className="new-group-item-text">Add Group</div>
        </div>
    );
 }
}

export default NewGroupButton;