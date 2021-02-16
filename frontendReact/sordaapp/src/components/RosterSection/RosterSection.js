import React, { Component } from 'react';
import './RosterSection.css';
import RosterItem from '../RosterItem/RosterItem';
import NewItemButton from '../NewItemButton/NewItemButton';

class RosterSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rosterMax: 40,
            rosterMin: 2,  // OR min. should be at least the number of groups created...
            menuRange: [],
            // keys: [],
            showRoster: true,
            roster: [
                {key:'', name: "Kenly", group: 1},
                {key:'', name: "Victor", group: 2}
            ]
        }

        this.renderSelectMenu = this.renderSelectMenu.bind(this);
        this.generateItems = this.generateItems.bind(this);
        this.generateKeys = this.generateKeys.bind(this);
        this.addItem = this.addItem.bind(this);
    }    

     //  LIFECYCLE -------------------------------------------------
    componentDidMount() {
        this.renderSelectMenu();
        this.generateKeys(this.state.roster);
    }

    generateKeys() {
        console.log("Generating KEYS...")
        let keys = [];
        let range = this.state.menuRange;
        console.log(range);
        let i = 0;
        for (let item of range) {
            let key = i * 3;
            item.key = key;
            item.value = i;
            i++;
            console.log("KEY: " + item.key, 
                        "\n VALUE: " + item.value);
        }
        // console.log("Roster w/keys?" + roster);
        this.setState({keys: keys});
    }


    // // Create the options list for dropdown select menu
    renderSelectMenu() {
        console.log('Make dropdown menu for roster...');
        // Loop through range of min/max to populate the menuRange array
        let menuRange = [];
        let min = this.state.rosterMin;
        let max = this.state.rosterMax;
        for (let i=min; i<=max; i++) {
            let obj = {key:null, value:i};
            let j = i * 3;
            obj.key = j;
            menuRange.push(i);
            // console.log(menuRange);
        }
        this.setState({menuRange: menuRange});
        console.log('MENU RANGE: ' + menuRange);
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
                        {this.state.menuRange.map((num) => 
                            <option key={num} value={num}>{num}</option>
                        )}
                    </select>
                </header>

                <div className="roster-items-container">
                    
                    <div id="roster-display-wrapper">
                        {this.state.roster.map(item => 
                            <RosterItem 
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