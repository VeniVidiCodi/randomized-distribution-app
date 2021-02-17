import React, { Component } from 'react';
import './RosterItem.css';
// import RosterListItem from '../GroupListItem/GroupListItem';

class RosterItem extends Component {
    render() {
    let name = this.props.name;
    // let key = this.props.key;
    // let group = this.props.group;

        return(
            <div className="roster-item-container">
                <div className="roster-item-text">{name}</div>
                <div className="roster-del-btn" onClick={()=>console.log('delete roster item')}>x</div>
            </div>
        );
    }
}

export default RosterItem;