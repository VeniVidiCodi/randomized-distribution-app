import React, { Component } from 'react';
import './NewItemButton.css';

class NewItemButton extends Component {
 render() {
    return (
        <div className="add-item-button" onClick={this.props.onClick}>
            {/* <div className="roster-add--button">+</div> */}
            <div className="new-roster-item-text">+</div>
        </div>
    );
 }
}

export default NewItemButton;