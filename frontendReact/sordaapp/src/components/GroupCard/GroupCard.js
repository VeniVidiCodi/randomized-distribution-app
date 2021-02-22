import React, { Component } from 'react';
import './GroupCard.css';
import GroupListItem from '../GroupListItem/GroupListItem';
import ResultItem from '../ResultItem/ResultItem';

export default class GroupCard extends Component {
    constructor(props) {
        super(props);
    }

render() {
    const title = this.props.title;
    const entries = this.props.entries;

        console.log(entries);
    return(
        <div className="group-container">
            <div className="group-name">{title}
                {/* <div className="group-del-btn">x</div> */}
            </div>
            <div className="group-items--display">
                {/* Render Groups for ResultPage */}
                {}
                <ResultItem entry={entries[0]} />
                {/* entries.map((entry) => 
                    <GroupListItem entry={entry} />
                    // <GroupListItem>{entry}</GroupListItem>
                )*/}
                {/* <div className="group-item">item 1</div>
                <div className="group-item">item 2</div>
                <div className="group-item">item 3</div> */}
            </div>
            {/* <div className="group-del-btn2">x</div> */}
        </div>
    );
    }
}