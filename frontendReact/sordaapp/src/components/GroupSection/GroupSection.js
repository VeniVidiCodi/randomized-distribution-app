import React, { Component } from 'react';
import './GroupSection.css';
import NewGroupButton from '../NewGroupButton/NewGroupButton';
import GroupMenuButton from '../GroupMenuButton/GroupMenuButton';
import GroupCard from '../GroupCard/GroupCard';

class GroupSection extends Component {
    state = {
        max: 8,
        min: 2,
        buttons: [2, 3, 4, 5, 6, 7, 8],
        groups: [
            {title: "setup", entries: []},
            {title: "cook", entries: []},
            {title: "clean", entries: []}
        ]
        // count:  this.groups.length
    }

    addGroup() {
        // Adds new entry in state.groups array

        const index  = 0;
        const title = "Group " + (index + 1);
        const newGroup = {
            title: title,
            entries: []
        }
        let groups = this.state.groups;
        // groups.push(newGroup);
        
        this.setState({groups: groups.push(newGroup)});
    }

    
    render() {
        return (
            <div className="group-section">

                <header className="group-nav">
                    <div className="group-header-caption">Groups/Categories:</div>
                    <div className="group-btn-container">
                        {/* {this.state.buttons.map((button) => <div className="group-button">{button}</div>)} */}
                        {this.state.buttons.map((button) => <GroupMenuButton value={button} onClick={this.createGroup} />)}
                        
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
                            <GroupCard title={group.title} entries={group.entries} />
                        )}

                        <NewGroupButton onClick={this.addGroup} />
                    </div>
                </div>   
                    
            </div>
        );
    }
}

export default GroupSection;