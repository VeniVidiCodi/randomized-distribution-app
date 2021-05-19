import React, { useEffect, useState } from 'react';
import './RosterItem.css';


function RosterItem (props) {
    const [showTitle, setShowTitle] = useState(true);
    const [title, setTitle] = useState(props.title);


    // useEffect(() => {
    //     console.log("ROSTER CARD mounted");
    // })

    const handleChange = e => {
        console.log(e.target.value);
        setTitle(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        toggleTitle();
        props.updateItemName(title, props.index);
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
        <div className="roster-item-container">
            { showTitle ?
                <div className="roster-item-text" onClick={toggleTitle}>{title}</div>
                :
                <form className="input-wrapper">
                <label>
                    <input 
                        id="project-title--input" 
                        type="text" 
                        name="name" 
                        placeholder={title} 
                        onChange={handleChange} 
                        onKeyPress={handleKeypress} 
                        value={title}  
                    />
                </label>
                <input className="title-submit-button" onClick={handleSubmit} type="submit" value="✓" />
                </form>
            }

            <button className="roster-del-btn" onClick={props.deleteItem} value={props.index}>x</button>
        </div>
    );
}


export default RosterItem;