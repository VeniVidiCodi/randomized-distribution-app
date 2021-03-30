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
            // menuRange: [],
            showRoster: true,
            // selectValue: null,
            roster: [
                // {key: null, name: "Kenly", group: 1},
                // {key: null, name: "Victor", group: 2}
            ]
        }

        this.generateRoster = this.generateRoster.bind(this);
        this.createNewItem = this.createNewItem.bind(this);
        this.addItem = this.addItem.bind(this);
    }    

    //  LIFECYCLE METHODS  -------------------------------------------------
    // componentDidMount() {

    // }
    
    
    // //  EVENT HANDLERS  -------------------------------------------------
    // handleChange(event) {
    //     this.setState({selectValue: event.target.value});
    // }

    // handleSubmit(event) {
    //     alert('You chose: ' + this.state.selectValue);
    //     event.preventDefault();
    //     this.generateItems(this.state.selectValue);
    // }

    // // CREATE GENERIC LIST ITEMS BASED ON CHOSEN MENU SELECT OPTION 
    // generateItems(num) {
    //     console.log('Generate roster list based on...', num);

    //     let roster = [];    // Reset the roster items array
    //     let showRoster = this.state.showRoster;

    //     // Populate the roster array with chosen number of entries
    //     for (let i=0; i<num; i++) {
    //         let genericName = "Item " + (i + 1);
    //         let key = nanoid();
    //         let item = {                // TO DO:  Replace with formatted class?
    //             description: genericName,
    //             key : key,
    //             group: null
    //         }

    //         roster.push(item);
    //     }

    //     this.setState({
    //         roster: roster
    //     });
    // }
    
    
    createNewItem() {
        console.log('Add Roster Item...')
        let roster = this.state.roster;
        let length  = roster.length;
        console.log("ROSTER LENGTH:", length)
        let item = {
                key: nanoid(),
                description : 'Item ' + (length + 1)
        }
        return item;
    }

   // Add entry to state's group array
    addItem() {
        console.log("ADDING NEW ROSTER ITEM...");
        const roster = this.state.roster;
        const item = this.createNewItem();
        roster.push(item);
        console.log('ROSTER ARRAY:', roster);
        this.setState({roster: roster});
    }

    // Add multiple entries to group array from MODAL INPUT
    generateRoster(e) {
        console.log("Generating multiple roster items...");
        let qty = e.target.innerText;
        // let groups = this.state.groups;
        // let showAddButton = this.state.showAddButton;
        // showAddButton = false;

        // Populate the groups array with chosen number of entries
        for (let i=0; i<qty; i++) {
            this.addItem();
        }

        // this.setState({
        //     groups: groups,
        //     showGroupMenu: showGroupMenu
        // });
    }

    removeItem = index => {
        console.log("Removing Roster Item...");
        console.log("Index:", index);

        // Targeting element
        const roster = this.state.roster;
        // console.log("ID:", groups[e]);
        const target = roster[index];
        console.log("TARGET:", target);

        roster.splice(index, 1);
        console.log(roster);

        this.setState({roster: roster});
    }

    changeName = item => {
        console.log('changing name...');
        const description = item.description;
        console.log(description);
        const roster = this.state.roster;
        console.log('current groups:', roster);
        this.setState({roster: roster})
    }

    
    render() {
        return (
            <div className="roster-section">

                <header className="roster-section-header">
                    <div className="roster-header-caption">
                        Roster/Items: {(this.state.roster.length > 0) ?
                            this.state.roster.length : null}
                    </div>
                    
                    {(this.state.roster.length < this.state.rosterMax) ? 
                            <NewItemButton onClick={this.addItem} /> :
                            <div></div>
                        } 
                </header>

                <div className="roster-items-container">
                    <div id="roster-display-wrapper">
                        {this.state.roster.map((item, index) => 
                            <RosterItem 
                                key={item.key}
                                description={item.description}
                                handleChange={() => this.changeName(item)}
                                delete={() => this.removeItem(index)}/>
                        )}
                    </div>
                </div>
                
            </div>
        )
    }
 }
export default RosterSection;