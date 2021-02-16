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
            showRoster: true,
            selectValue: null,
            roster: [
                // {key: null, name: "Kenly", group: 1},
                // {key: null, name: "Victor", group: 2}
            ]
        }

        this.renderSelectMenu = this.renderSelectMenu.bind(this);
        this.generateItems = this.generateItems.bind(this);
        this.addItem = this.addItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }    

    //  LIFECYCLE METHODS  -------------------------------------------------
    componentDidMount() {
        this.renderSelectMenu();
    }
    
    // Create the options list for dropdown select menu
    renderSelectMenu() {
        console.log('RENDERING DROPDOWN...');
        // Loop through range of min/max to populate the menuRange array
        let menuRange = [];
        // let min = this.state.rosterMin;
        let max = this.state.rosterMax;

        for (let i=0; i<=max; i++) {
            const key = nanoid();
            const obj = {
                key: key, 
                value: i
            };
            menuRange.push(obj);
            console.log(menuRange);
        }

        this.setState({
            menuRange: menuRange
        });
        // console.log('MENU RANGE: ' + menuRange);
    }

    //  EVENT HANDLERS  -------------------------------------------------
    handleChange(event) {
        this.setState({selectValue: event.target.value});
    }

    handleSubmit(event) {
        alert('You chose: ' + this.state.selectValue);
        event.preventDefault();
        this.generateItems(this.state.selectValue);
    }

    // CREATE GENERIC LIST ITEMS BASED ON CHOSEN MENU SELECT OPTION 
    generateItems(num) {
        console.log('Generate roster list based on...', num);

        let roster = [];    // Reset the roster items array
        let showRoster = this.state.showRoster;

        // Populate the roster array with chosen number of entries
        for (let i=0; i<num; i++) {
            let genericName = "Item " + (i + 1);
            let key = nanoid();
            let item = {                // TO DO:  Replace with formatted class?
                name: genericName,
                key : key,
                group: null
            }

            roster.push(item);
        }

        this.setState({
            roster: roster
        });
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

    
    render() {
        return (
            <div className="roster-container">

                <form className="roster-nav" onSubmit={this.handleSubmit}>
                    <label className="roster-header-caption"> 
                        Roster/Items:
                        <select name="roster" id="roster-select" value={this.state.value} onChange={this.handleChange}>
                            {this.state.menuRange.map(num => 
                                <option key={num.key} value={num.value}>{num.value}</option>
                            )}
                        </select>
                    </label>
                    <input type="submit" value="Submit" />
                </form>

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
                </div>
            </div>
        )
    }
 }
export default RosterSection;