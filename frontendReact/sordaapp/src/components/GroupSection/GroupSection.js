import React, { Component } from 'react';
import './GroupSection.css';
import NewGroupButton from '../NewGroupButton/NewGroupButton';
import GroupMenuButton from '../GroupMenuButton/GroupMenuButton';
import GroupCard from '../GroupCard/GroupCard';


export default class GroupSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            max: 8,
            min: 2,
            // menuButtons: [],
            // showGroupMenu: true,
            projectName: "Grouper",
            groups: [
                {groupName: "Group A", id: 9}
            ]
        }
        // this.handleClick = this.handleClick.bind(this); EXAMPLE
        // this.renderGroupMenuButtons = this.renderGroupMenuButtons.bind(this);
        this.addGroup = this.addGroup.bind(this);
        this.generateGroups = this.generateGroups.bind(this);
    }    

    //  LIFECYCLE -------------------------------------------------
    componentDidMount() {
        // this.renderGroupMenuButtons();
    }
    
    // renderGroupMenuButtons() {
    //     // console.log("GENERATING GROUP MENU BUTTONS...");
    //     let menuButtons = [];
    //     let min = this.state.min;
    //     let max = this.state.max;
    //     for (let i=min; i<=max; i++) {
    //         menuButtons.push(i);
    //     }
    //     // console.log(menuButtons);
    //     this.setState({menuButtons: menuButtons});
    // }

    // EVENT HANDLERS -------------------------------------------------

    // Add entry to state's group array
    addGroup() {
        // console.log("Adding new group...");
        let index  = this.state.groups.length;
        let groups = this.state.groups;
        let groupName = "Group " + (index + 1);
        let group = {
                        groupName : groupName,
                        id: this.state.groups.length + 1
                    }  // Replace with class?
        groups.push(group);
        this.setState({groups: groups});
    }

    // Add multiple entries to group array
    generateGroups(e) {
        console.log("Generating multiple groups...");
        let num = e.target.innerText;
        let groups = [];    // Resets the groups array
        let showGroupMenu = this.state.showGroupMenu;
        showGroupMenu = false;

        // Populate the groups array with chosen number of entries
        for (let i=0; i<num; i++) {
            let groupName = "Group " + (i + 1);
            let group = {
                groupName: groupName,
                id : i
            }   // Replace with class?
            groups.push(group);
        }

        this.setState({
            groups: groups,
            showGroupMenu: showGroupMenu
        });
        // console.log("Groups generated:", groups);
    }
    

    render() {
        // console.log(this.state.groups);
        return (
            <div className="group-section">

                <header className="group-section-header">
                    <div className="group-header-caption">Groups</div>
                    {this.state.groups.length < this.state.max ? 
                            <NewGroupButton onClick={this.addGroup} /> 
                            : <div></div>
                        }
                </header>

                <div className="group-items-container">
                    <div id="groups-display-wrapper">
                        {this.state.groups.map((group) => 
                            <GroupCard 
                                key={group} 
                                title={group.groupName}
                                id={group.id} />
                        )}
                    </div>
                </div>   
                    
            </div>
        );
    }
}