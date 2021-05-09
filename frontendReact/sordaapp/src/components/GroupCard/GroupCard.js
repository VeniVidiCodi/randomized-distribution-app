import React, { useState } from 'react';
import './GroupCard.css';
// import GroupListItem from '../GroupListItem/GroupListItem';

function GroupCard(props) {
    let [display, setDisplay] = useState(true);

    let changeTitle = (e) => {
        setDisplay(e.target.value);
        toggleTitle();
    }
    
    let toggleTitle = () => {
        console.log("Toggling Title");

        if (display) {
            console.log("T -> F");
            setDisplay(false);
        } else {
            console.log("F -> T");
            setDisplay(true);
        };
    }

    

    let handleSubmit = (event) => {
        event.preventDefault();
        this.toggleTitle();
    }


    return(
        <div className="group-container">
            <div className="group-card--header">
                { display ?
                    <div className="group-title" onClick={setDisplay}>{props.title}</div>
                    :
                    <form className="input-wrapper" onSubmit={props.submitTitle}>
                    <label>
                        <input id="project-title--input" type="text" name="name" placeholder="ADD GROUP TITLE" onChange={changeTitle} value={props.title} />
                    </label>
                    <input className="title-submit-button" onClick={props.submitTitle} type="submit" value="✓" />
                    </form>
                }

                <button className="group-del-btn" onClick={this.props.delete}>x</button>
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

export default GroupCard;