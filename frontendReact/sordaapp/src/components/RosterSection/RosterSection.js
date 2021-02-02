import React, { Component } from 'react';
import './RosterSection.css';

class RosterSection extends Component {
 render() {
    return (
        <div class="roster-container">
            <header class="roster-nav">
                <div class="roster-header-caption ">Roster/Items:</div>
                <select name="roster" id="roster-select">

                </select>
            </header>

            <div class="roster-items-container">
                <div class="roster-item roster-item--display">
                    <div class="roster-item--text">Item 1</div>
                    <button class="roster-delete--button">X</button>
                </div>
                <div class="roster-item roster-item--new">
                    <button class="roster-add--button">+</button>
                    <div class="roster-item--text">Add Item</div>
                </div>
            </div>
        </div>
    )
 }
 }
export default RosterSection;