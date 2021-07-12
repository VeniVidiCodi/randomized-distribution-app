import e from 'cors';
import React, { useState } from 'react';
import './GroupCard.css';


function GroupCard(props) {
    const [showTitle, setShowTitle] = useState(true);
    const [title, setTitle] = useState(props.title);

    const handleChange = e => {
        // console.log(e.target.value);
        setTitle(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        toggleTitle();
        props.updateGroupTitle(title, props.index);
    }

    const handleKeypress = e => {
        //it triggers by pressing the enter key
        if (e.keyCode === 13) {
        handleSubmit(e, props.index);
        }
    };
    
    const toggleTitle = () => {
        if (showTitle) {
            // console.log("T -> F");
            setShowTitle(false);
        } else {
            // console.log("F -> T");
            setShowTitle(true);
        };
    }


    return(
        <div className="group-container">
            <div className="group-card--header">
                { showTitle ?
                    <div className="group-title" onClick={toggleTitle}>{title}</div>
                    :
                    <form className="group-title input-wrapper" >
                        <label>
                            <input 
                                id="project-title--input" 
                                type="text" 
                                name="name" 
                                placeholder={title} 
                                onChange={handleChange} 
                                onKeyPress={handleKeypress} 
                                value={title} 
                                autoFocus
                            />
                        </label>
                        <input className="title-submit-button" onClick={handleSubmit} type="submit" value="✓" />
                        {/* <input className="title-submit-button" onClick={toggleTitle} type="submit" value="✓" /> */}
                    </form>
                }
                <div className="card-header--buttons">
                <span className="edit-btn">&#9998;</span>

                <button className="group-del-btn" onClick={props.deleteGroup} value={props.index}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                </button>
                </div>
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