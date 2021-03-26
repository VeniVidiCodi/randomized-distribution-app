import React, { Component } from 'react';
import './GroupSection.css';
import NewGroupButton from '../NewGroupButton/NewGroupButton';
import GroupCard from '../GroupCard/GroupCard';
import { nanoid } from 'nanoid';


export default class GroupSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            max: 8,
            min: 2,
            // menuButtons: [],
            // showGroupMenu: true,
            projectName: "",
            groups: []
        }

        this.createNewGroup = this.createNewGroup.bind(this);
        this.addGroup = this.addGroup.bind(this);
        this.generateGroups = this.generateGroups.bind(this);
        // this.removeGroup = this.removeGroup.bind(this);
        // this.changeName = this.changeName.bind(this);
    }    

    //  LIFECYCLE -------------------------------------------------
    componentDidMount() {
        // this.renderGroupMenuButtons();
    }

    // EVENT HANDLERS ---------------------------------------------
    createNewGroup() {
        console.log("CREATING NEW GROUP...");
        const groups = this.state.groups;
        const length  = groups.length;
        const id = length;
        const groupName = "Group " + (length + 1);
        const key = nanoid();
        const group = { 
            groupName: groupName,
            id : id,
            key: key
        }
        console.log('NEW GROUP:', group);
        return group;
    }

    // Add entry to state's group array
    addGroup() {
        console.log("ADDING NEW GROUP...");
        const groups = this.state.groups;
        const group = this.createNewGroup();
        groups.push(group);
        console.log('GROUPS ARRAY:', groups);
        this.setState({groups: groups});
    }

    // Add multiple entries to group array from MODAL INPUT
    generateGroups(e) {
        console.log("Generating multiple groups...");
        let qty = e.target.innerText;
        // let groups = this.state.groups;
        // let showAddButton = this.state.showAddButton;
        // showAddButton = false;

        // Populate the groups array with chosen number of entries
        for (let i=0; i<qty; i++) {
            this.addGroup();
        }

        // this.setState({
        //     groups: groups,
        //     showGroupMenu: showGroupMenu
        // });
    }

    removeGroup = index => {
        console.log("Removing Group...");
        console.log("Index:", index);

        // Targeting element
        const groups = this.state.groups;
        // console.log("ID:", groups[e]);
        const target = groups[index];
        console.log("TARGET:", target);

        groups.splice(index, 1);    // TO FIX: e is still giving a value of 0
        console.log(groups);

        this.setState({groups: groups});
    }

    changeName = group => {
        console.log('changing name...');
        const name = group.groupName;
        console.log(name);
        const groups = this.state.groups;
        console.log('current groups:', groups);

        // this.setState({groups: groups})
    }
    
    // setTitle = 

    

    render() {
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
                        {this.state.groups.map((group, index) => 
                            <GroupCard 
                                key={group.key} 
                                title={group.groupName}
                                handleChange={() => this.changeName(group)}
                                id={group.id}
                                delete={() => this.removeGroup(index)} />
                        )}
                    </div>
                </div>   
                    
            </div>
        );
    }
}