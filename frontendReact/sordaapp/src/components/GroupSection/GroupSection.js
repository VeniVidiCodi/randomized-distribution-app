import React, { Component } from 'react';
import './GroupSection.css';
import NewGroupButton from '../NewGroupButton/NewGroupButton';
import GroupCard from '../GroupCard/GroupCard';
import { nanoid } from 'nanoid';
import {Group} from '../../groupClass.js';


export default class GroupSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            max: 8,
            min: 2,
            GroupObject: {},
            groups: []
            // GroupObject: this.props.GroupObject,
            // groups: this.props.GroupObject.groupNames
            // addGroup: this.props.addGroup
        }

        this.createNewGroup = this.createNewGroup.bind(this);
        this.addGroup = this.addGroup.bind(this);
        // this.generateGroups = this.generateGroups.bind(this);
    }    

    //  LIFECYCLE -------------------------------------------------
    componentDidMount() {
        // this.renderGroupMenuButtons();
    }

    // TRIAL CLASS FUNCTIONS ---------------------------------------------
    // createNewGroup() { 
        // let length = this.state.groups.length;
        // console.log(length);
    // }

    // addGroup() {
    //     let length = this.state.groups.length;
    //     console.log(length)
    //     let newGroupArr = addGroupNames('Group ' + (length + 1));
    //     this.setState({groups: newGroupArr});
    // }
    // addGroup() {
        
    // }

    // EVENT HANDLERS ---------------------------------------------
    createNewGroup() {
        console.log("CREATING NEW GROUP...");
        const groups = this.state.groups;
        const length  = groups.length;
        // const id = length;
        const groupName = "Group " + (length + 1);
        // const key = nanoid();
        const group = { 
            groupName: groupName,
            // key: key
        }
        console.log('NEW GROUP:', group);
        return groupName;
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
    // generateGroups(e) {
    //     console.log("Generating multiple groups...");
    //     let qty = e.target.innerText;
    //     // let groups = this.state.groups;
    //     // let showAddButton = this.state.showAddButton;
    //     // showAddButton = false;

    //     // Populate the groups array with chosen number of entries
    //     for (let i=0; i<qty; i++) {
    //         this.addGroup();
    //     }

    //     // this.setState({
    //     //     groups: groups,
    //     //     showGroupMenu: showGroupMenu
    //     // });
    // }

    removeGroup = index => {
        console.log("Removing Group...");
        console.log("Index:", index);

        // Targeting element
        const groups = this.state.groups;
        // console.log("ID:", groups[e]);
        const target = groups[index];
        console.log("TARGET:", target);

        groups.splice(index, 1);
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

    render() {
        console.log(this.state.GroupObject)
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
                                // key={group.key} 
                                key={nanoid()} 
                                title={group}
                                handleChange={() => this.changeName(group)}
                                delete={() => this.removeGroup(index)} />
                        )}
                    </div>
                </div>   
                    
            </div>
        );
    }
}