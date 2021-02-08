import React, { Component } from 'react';
import './GroupSection.css';
import NewGroupButton from '../NewGroupButton/NewGroupButton';
import GroupMenuButton from '../GroupMenuButton/GroupMenuButton';
import GroupCard from '../GroupCard/GroupCard';

class GroupSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            max: 8,
            min: 2,
            buttons: [2, 3, 4, 5, 6, 7, 8],
            projectName: "Grouper",
            groups: [], // An array of strings as group names
            rosterItems: [
                // {"Kenly": 1},
                // {"Victor" : 2}
            ] 
        }
        // this.handleClick = this.handleClick.bind(this); EXAMPLE
        this.addGroup = this.addGroup.bind(this);
        this.generateGroups = this.generateGroups.bind(this);
    }    

    // FUNCTIONS -------------------------------------------------
    // On click of 'Add Group' button, add entry to group array and create card
    addGroup() {
        console.log("Adding new group...");
        // Adds new entry in state.groups array
        let index  = this.state.groups.length;
        let groupName = "Group " + (index + 1);
        let groups = this.state.groups;
        groups.push(groupName);
        this.setState({groups: groups});
    }

    // On click of a numbered group menu button, add entries to group array and generate cards
    generateGroups(e) {
        console.log("Generating multiple groups...")
        console.log(e.target.innerText);
        let num = e.target.innerText;
        let groups = [];
        // console.log(groups);
        for (let i=0; i<num; i++) {
            let groupName = "Group " + (i + 1);
            groups.push(groupName);
        }
        // Also, 
        this.setState({groups: groups});
    }

    // Generate group cards for the DOM based on state
    generateCards() {
        console.log("Creating Card Elements");
        // TODO 
    }


    
    render() {
        return (
            <div className="group-section">

                <header className="group-nav">
                    <div className="group-header-caption">Groups/Categories:</div>
                    <div className="group-btn-container">
                        {/* {this.state.buttons.map((button) => <div className="group-button">{button}</div>)} */}
                        {this.state.buttons.map((button) => 
                            <GroupMenuButton 
                                key={button}
                                value={button} 
                                onClick={this.generateGroups}
                            />
                        )}
                        
                    </div>
                </header>

                <div className="group-items-container">
                    <div id="groups-display-wrapper">

                        {/* <div className="group-container">
                            <div className="group-name">DECORATIONS
                                <div className="group-del-btn">x</div>
                            </div>
                            <div className="group-items--display">
                                <div className="group-item">item 1</div>
                                <div className="group-item">item 2</div>
                                <div className="group-item">item 3</div>
                            </div>
                            <div className="group-del-btn2">x</div>
                        </div>


                        <div className="group-container">
                            <div className="group-name">GROUP 2</div>
                            <div className="group-items--display"></div>
                        </div> */}

                        {/* <GroupCard /> */}
                        
                        {this.state.groups.map((group) => 
                            <GroupCard title={group} />
                        )}

                        <NewGroupButton onClick={this.addGroup} />
                    </div>
                </div>   
                    
            </div>
        );
    }
}

export default GroupSection;