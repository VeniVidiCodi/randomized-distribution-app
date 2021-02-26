import React, { Component } from 'react';
import './GroupCard.css';
import GroupListItem from '../GroupListItem/GroupListItem';
// import ResultItem from '../ResultItem/ResultItem';

export default class GroupCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            id: props.id
        }
    }

render() {
        console.log(this.state.id);
    return(
        <div className="group-container">
            <div className="group-name">{this.state.title}
                <div className="group-del-btn">x</div>
            </div>
            <div className="group-items--display">
                {/* Render Groups for ResultPage */}
                {/* <ResultItem entry={entries[0]} /> */}
                {/* {this.state.entries.map((entry) => 
                    <GroupListItem entry={entry} />
                    // <GroupListItem>{entry}</GroupListItem>
                )} */}
            </div>
            {/* <div className="group-del-btn2">x</div> */}
        </div>
    );
    }
}