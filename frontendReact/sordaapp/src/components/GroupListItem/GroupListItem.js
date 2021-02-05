import React, { Component } from 'react';
import './GroupListItem.css';

class GroupListItem extends Component {
    render() {
        const entry = this.props.entry;
        return(
                    <div className="group-list-item">{entry}</div>
        );
    }
}

export default GroupListItem;