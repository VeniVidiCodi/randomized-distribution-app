import React, { Component } from 'react';
import './NewItemButton.css';

class NewItemButton extends Component {
 render() {
    return (
        <div className="roster-item--new">
            <div className="roster-add--button" onClick={this.props.onClick}>+</div>
            <div className="new-roster-item-text">Add Roster Item</div>
        </div>
    );
 }
}

export default NewItemButton;