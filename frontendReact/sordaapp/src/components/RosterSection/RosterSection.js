import React, { Component } from 'react';
import './RosterSection.css';

class RosterSection extends Component {
 render() {
    return (
        <div className="roster-container">
            <header className="roster-nav">
                <div className="roster-header-caption ">Roster/Items:</div>
                <select name="roster" id="roster-select">

                </select>
            </header>

            <div className="roster-items-container">
                <div className="roster-item roster-item--display">
                    <div className="roster-item--text">Item 1</div>
                    <button className="roster-delete--button">X</button>
                </div>
                <div className="roster-item roster-item--new">
                    <button className="roster-add--button">+</button>
                    <div className="roster-item--text">Add Item</div>
                </div>
            </div>
        </div>
    )
 }
 }
export default RosterSection;