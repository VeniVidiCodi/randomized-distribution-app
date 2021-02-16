import React, { Component } from 'react';
import './RosterSection.css';
import RosterCard from '../RosterCard/RosterCard';
import NewItemButton from '../NewItemButton/NewItemButton';


class RosterSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rosterMax: 40,
            rosterMin: 2,  // OR min. should be at least the number of groups created...
            menuRange: [],
            showRoster: true,
            roster: [
                {name: "Kenly", group: 1},
                {name: "Victor", group: 2}
            ]
        }

        this.renderSelectMenu = this.renderSelectMenu.bind(this);
        this.addItem = this.addItem.bind(this);
        this.generateItems = this.generateItems.bind(this);
    }    

     //  LIFECYCLE -------------------------------------------------
    componentDidMount() {
        this.renderSelectMenu();
    }


    // Create the options list for dropdown select menu
    renderSelectMenu() {
        console.log('Make dropdown menu for roster...');
        // Loop through range of min/max to populate the menuRange array
        let menuRange = [];
        let min = this.state.rosterMin;
        let max = this.state.rosterMax;
        for (let i=min; i<=max; i++) {
            menuRange.push(i);
        }
        this.setState({menuRange: menuRange});
    }

    addItem() {
        console.log('Add Roster Item...')
    }

    generateItems() {
        console.log('Generate roster list base...');

    }

    
    render() {
        return (
            <div className="roster-container">
                <header className="roster-nav">
                    <div className="roster-header-caption ">Roster/Items:</div>
                    <select name="roster" id="roster-select">
                        {this.state.menuRange.map(num => {
                            <option value="num">num</option>
                        })}

                    </select>
                </header>

                <div className="roster-items-container">
                    
                    <div id="roster-display-wrapper">
                        {this.state.roster.map(item => 
                            <RosterCard 
                                key={item} 
                                name={item.name} />
                        )}
                        {/* {this.state.roster.length < this.state.max ?  */}
                            <NewItemButton onClick={this.addItem} /> :
                            <div></div>
                        {/* } */}
                    </div>
                    
                    {/* <div className="roster-item roster-item--display">
                        <div className="roster-item--text">Item 1</div>
                        <button className="roster-delete--button">X</button>
                    </div>
                    <div className="roster-item roster-item--new">
                        <button className="roster-add--button">+</button>
                        <div className="roster-item--text">Add Item</div>
                    </div> */}
                </div>
            </div>
        )
    }
 }
export default RosterSection;