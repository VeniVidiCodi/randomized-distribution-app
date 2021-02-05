import React, { Component } from 'react';
import './GroupMenuButton.css';

class GroupMenuButton extends Component {

    render() {
        return(
            <div className="group-button" onClick={this.props.onClick}>{this.props.value}</div>
        )
    }
}

export default GroupMenuButton;