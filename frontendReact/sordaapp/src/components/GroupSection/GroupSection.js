// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react';
import './GroupSection.css';
import NewGroupButton from '../NewGroupButton/NewGroupButton';
import GroupCard from '../GroupCard/GroupCard';
import { nanoid } from 'nanoid';
import { Group } from '../../groupClass.js';


function GroupSection({groupNames, setGroupNames}) {
    console.log("GroupNames transfer test:", groupNames);
    
    const max = 8;
    const min = 2;
    // let groups = new Group();
    // let groupNames = groups.groupNames;
    // console.log(groups.groupNames);

    // useEffect(() => {
    //     console.log("GroupSection useEffect...");
    //     setGroupNames(groups);
    // }, [groupNames, groups])
    

    let createNewGroup = () => { 
        let length = groups.length;
        let name = "Group" + (length + 1);
        return name;
    }

    let addGroup = () => {
        console.log("addGroup clicked...");

        let tempGroups = groups;
        console.log(tempGroups);
        const newGroup = createNewGroup();
        tempGroups.push(newGroup);
        console.log(tempGroups);

        setGroupNames(tempGroups);
    }


    // EVENT HANDLERS ---------------------------------------------
    // createNewGroup() {
    //     console.log("CREATING NEW GROUP...");
    //     const groups = this.state.groups;
    //     const length  = groups.length;
    //     // const id = length;
    //     const groupName = "Group " + (length + 1);
    //     // const key = nanoid();
    //     const group = { 
    //         groupName: groupName,
    //         // key: key
    //     }
    //     console.log('NEW GROUP:', group);
    //     return groupName;
    // }

    // Add entry to state's group array
    // addGroup() {
    //     console.log("ADDING NEW GROUP...");
    //     const groups = this.state.groups;
    //     const group = this.createNewGroup();
    //     groups.push(group);
    //     console.log('GROUPS ARRAY:', groups);
    //     this.setState({groups: groups});
    // }

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

    // removeGroup = index => {
    //     console.log("Removing Group...");
    //     console.log("Index:", index);

    //     // Targeting element
    //     const groups = this.state.groups;
    //     // console.log("ID:", groups[e]);
    //     const target = groups[index];
    //     console.log("TARGET:", target);

    //     groups.splice(index, 1);
    //     console.log(groups);

    //     this.setState({groups: groups});
    // }

    // let changeName = group => {
    //     console.log('changing name...');
    //     const name = group.groupName;
    //     console.log(name);
    //     const groups = this.state.groups;
    //     console.log('current groups:', groups);
    //     // this.setState({groups: groups})
    // }

        // console.log(this.state.GroupObject);
        return (
            <div className="group-section">

                <header className="group-section-header">
                    <div className="group-header-caption">Groups</div>
                    {groupNames.length < max ? 
                            <NewGroupButton onClick={addGroup} /> 
                            : <div></div>
                    }
                </header>

                <div className="group-items-container">
                    <div id="groups-display-wrapper">
                        {groupNames.map((group, index) => 
                            <GroupCard 
                                // key={group.key} 
                                key={nanoid()} 
                                title={group}
                                // handleChange={() => this.changeName(group)}
                                // delete={() => this.removeGroup(index)} 
                            />
                        )}
                    </div>
                </div>   
                    
            </div>
        );
    }

export default GroupSection;