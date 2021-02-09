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
            showGroupMenu: true,
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
        console.log("Generating multiple groups...");
        let num = e.target.innerText;
        let groups = [];    // Resets the groups array
        let showGroupMenu = this.state.showGroupMenu;

        if (num == 8) {
        // If there are already 8 groups, remove the AddGroup Button from the page
        }

        // When the user clicks the menu, remove or mask down the button menu
        showGroupMenu = false;
        console.log(showGroupMenu);


        // Populate the groups array with chosen number of entries
        for (let i=0; i<num; i++) {
            let groupName = "Group " + (i + 1);
            let group = {}  // Replace with class?
            groups.push(groupName);
        }

        this.setState({
            groups: groups,
            showGroupMenu: showGroupMenu
        });
    }
    
    render() {
        return (
            <div className="group-section">

                <header className="group-nav">
                    <div className="group-header-caption">Groups/Categories:</div>
                    {this.state.showGroupMenu ? 
                    <div className="group-btn-container">
                        {this.state.buttons.map((button) => 
                            <GroupMenuButton 
                                key={button}
                                value={button} 
                                onClick={this.generateGroups}
                            />
                        )}

                    </div>:
                    <div></div>}
                </header>

                <div className="group-items-container">
                    <div id="groups-display-wrapper">
                        {this.state.groups.map((group) => 
                            <GroupCard key={group.key} title={group} />
                        )}
                        <NewGroupButton onClick={this.addGroup} />
                    </div>
                </div>   
                    
            </div>
        );
    }
}

export default GroupSection;