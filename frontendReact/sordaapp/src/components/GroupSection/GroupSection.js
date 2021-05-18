import React, { useEffect, useState } from 'react';
import './GroupSection.css';
import NewGroupButton from '../NewGroupButton/NewGroupButton';
import GroupCard from '../GroupCard/GroupCard';
import { nanoid } from 'nanoid';


function GroupSection (props) {
    const max = 8;
    // console.log(props.groupNames.length);
    // const min = 2;

    // EXAMPLE
    // let handleChange = (event) => {
    //     console.log('Handling Change: ' + event.target.value);
    //     props.setTitle(event.target.value);
    // }

    // let createNewGroup = () => { 
    //     console.log("creating new group...");

    //     let length = props.groupNames.length;
    //     console.log("groups length:", length);
    //     let group = "Group " + (length + 1);
    //     console.log(group);
    //     return group;
    // }

    // let addGroup = () => {
    //     console.log("addGroup clicked...");

    //     let tempGroupNames = props.groupNames;
    //     console.log(tempGroupNames);
    //     let newGroup = "Group " + (tempGroupNames.length + 1);

    //     tempGroupNames.push(newGroup);
    //     console.log(tempGroupNames);

    //     props.setGroupNames(tempGroupNames);
    // }

    // console.log(this.state.GroupObject);

    // let submitTitle = () => {
    //     console.log('Submitting GroupCard Title...');
    //  

    return (
        <div className="group-section">

            <header className="group-section-header">
                <div className="group-header-caption">Groups</div>
                {props.groupNames.length < max ? 
                        <NewGroupButton onClick={props.addGroup} /> 
                        : <div></div>
                }
            </header>

            <div className="group-items-container">
                <div id="groups-display-wrapper">
                    {props.groupNames.map((group, index) => 
                        <GroupCard 
                            key={nanoid()} 
                            title={group.name}
                            index={index}
                            // submitTitle={submitTitle}
                            // handleChange={handleChange}
                            deleteGroup={props.deleteGroup} 
                        />
                    )}
                </div>
            </div>   
                
        </div>
    );
}

export default GroupSection;