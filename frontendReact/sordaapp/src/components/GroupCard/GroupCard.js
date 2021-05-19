import e from 'cors';
import React, { useEffect, useState } from 'react';
import './GroupCard.css';


function GroupCard(props) {
    const [showTitle, setShowTitle] = useState(true);
    const [title, setTitle] = useState(props.title);

    
    // useEffect(() => {
    //     console.log("GROUP CARD mounted");
    // })

    const handleChange = e => {
        console.log(e.target.value);
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
            console.log("T -> F");
            setShowTitle(false);
        } else {
            console.log("F -> T");
            setShowTitle(true);
        };
    }


    return(
        <div className="group-container">
            <div className="group-card--header">
                { showTitle ?
                    <div className="group-title" onClick={toggleTitle}>{title}</div>
                    :
                    <form className="input-wrapper" >
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

                <button className="group-del-btn" onClick={props.deleteGroup} value={props.index}>x</button>
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