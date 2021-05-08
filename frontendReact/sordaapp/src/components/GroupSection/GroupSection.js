// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react';
import './GroupSection.css';
import NewGroupButton from '../NewGroupButton/NewGroupButton';
import GroupCard from '../GroupCard/GroupCard';
import { nanoid } from 'nanoid';
import { Group } from '../../groupClass.js';


function GroupSection(props) {
    const max = 8;
    const min = 2;


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
                    {props.groupNames.length < max ? 
                            <NewGroupButton onClick={props.addGroup} /> 
                            : <div></div>
                    }
                </header>

                <div className="group-items-container">
                    <div id="groups-display-wrapper">
                        {props.groupNames.map((group, index) => 
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