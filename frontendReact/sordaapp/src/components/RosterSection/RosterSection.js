import React, { Component } from 'react';
import './RosterSection.css';
import RosterItem from '../RosterItem/RosterItem';
import NewItemButton from '../NewItemButton/NewItemButton';
import { nanoid } from 'nanoid';

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
        // this.renderSelectMenu();
        // this.generateKeys();
        // this.generateItems(this.state.roster);
    }

    generateKeys() {
        console.log("GENERATING KEYS...")

        let keys = [];
        let max = this.state.rosterMax;
        let menuRange = this.state.menuRange;
        console.log("RANGE:", menuRange);
        let i = 0;
        for (let item of menuRange) {
            let key = nanoid();
            item.key = key;
            item.value = i;
            i++;
            console.log(i + "\n KEY: " + item.key, 
                        "\n VALUE: " + item.value);
        }
        // console.log("Roster w/keys?" + roster);
        this.setState({keys: keys});
    }


    // // Create the options list for dropdown select menu
    renderSelectMenu() {
        console.log('RENDERING DROPDOWN...');
        // Loop through range of min/max to populate the menuRange array
        let menuRange = [];
        let min = this.state.rosterMin;
        let max = this.state.rosterMax;
        for (let i=min; i<=max; i++) {
            let obj = {
                key: nanoid(), 
                value: i
            };
            menuRange.push(obj);
            // console.log(menuRange);
        }

        this.setState({
            menuRange: menuRange
        });
        console.log('MENU RANGE: ' + menuRange);
    }

    addItem() {
        console.log('Add Roster Item...')
        let index  = this.state.roster.length;
        let roster = this.state.roster;
        let newIndex = index + 1;
        let item = {
                        key: nanoid(),
                        name : 'Item' + newIndex,
                        group: ''
                    }  // Replace with class?
        roster.push(item);
        this.setState({roster: roster});
    }

    generateItems(arr) {
        console.log('Generate roster list base...');
        // let num = e.target.innerText;
        let num = arr.length;
        let roster = [];    // Reset the roster items array
        let showRoster = this.state.showRoster;
        // showRoster = false;   // Hide the dropdown menu

        // Populate the roster array with chosen number of entries
        for (let i=0; i<num; i++) {
            let genericName = "Item " + (i + 1);
            let key = i + 10;
            let item = {
                name: genericName,
                key : key
            }   // Replace with class?
            roster.push(item);
        }

        this.setState({
            roster: roster,
            showRoster: showRoster
        });
        // console.log("Roster generated:", roster);
    }

    
    render() {
        // console.log('result:' + this.state.roster.length)
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
                                key={item.key} 
                                name={item.name} />
                        )}

                        {(this.state.roster.length < this.state.rosterMax) ? 
                            <NewItemButton onClick={this.addItem} /> :
                            <div></div>
                        } 
                        
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