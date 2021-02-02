import React, { Component } from 'react';
import './GroupCard.css';

class GroupCard extends Component {
    render() {
    let title = this.props.title;
        return(
            <div className="group-container">
                <div className="group-name">{title}
                    {/* <div className="group-del-btn">x</div> */}
                </div>
                <div className="group-items--display">
                    
                    {/* <div className="group-item">item 1</div>
                    <div className="group-item">item 2</div>
                    <div className="group-item">item 3</div> */}
                </div>
                <div className="group-del-btn2">x</div>
            </div>
        );
    }
}

export default GroupCard;