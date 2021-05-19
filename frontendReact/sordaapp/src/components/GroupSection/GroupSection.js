import React, { useEffect, useState } from 'react';
import './GroupSection.css';
import NewGroupButton from '../NewGroupButton/NewGroupButton';
import GroupCard from '../GroupCard/GroupCard';
import { nanoid } from 'nanoid';


function GroupSection (props) {
    const max = 8;

    // useEffect(() => {
    //     console.log("GROUP SECTION mounted");
    // })
    
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
                            updateGroupTitle={props.updateGroupTitle}
                            deleteGroup={props.deleteGroup} 
                        />
                    )}
                </div>
            </div>   
                
        </div>
    );
}

export default GroupSection;