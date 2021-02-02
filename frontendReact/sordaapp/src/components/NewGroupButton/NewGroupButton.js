import React, { Component } from 'react';
import './NewGroupButton.css';

class NewGroupButton extends Component {
 render() {
    return (
        <div className="group-item--new">
            <button className="group-add--button" onClick={this.props.onClick}><a href="#">+</a></button>
            <div className="new-group-item-text">Add Group</div>
        </div>
    );
 }
}

export default NewGroupButton;