import React, { Component } from 'react';
import './RosterCard.css';
// import RosterListItem from '../GroupListItem/GroupListItem';

class RosterCard extends Component {
    render() {
    let name = this.props.name;
    // let key = this.props.key;
    // let group = this.props.group;

        return(
            <div className="roster-item-container">
                <div className="roster-item-text">{name}</div>
                <div className="roster-del-btn" >x</div>
            </div>
        );
    }
}

export default RosterCard;