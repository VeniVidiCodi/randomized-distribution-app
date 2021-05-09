// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react';
import './GroupSection.css';
import NewGroupButton from '../NewGroupButton/NewGroupButton';
import GroupCard from '../GroupCard/GroupCard';
import { nanoid } from 'nanoid';
import { Group } from '../../groupClass.js';


function GroupSection ({groupNames, addGroup, handleChange}) {
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

    let submitTitle = () => {console.log('Submitting GroupCard Title...')}

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
                            handleChange={handleChange}
                            submitTitle={submitTitle}
                            // delete={() => this.removeGroup(index)} 
                        />
                    )}
                </div>
            </div>   
                
        </div>
    );
}

export default GroupSection;