import React, { Component } from 'react';
import './GroupMenuButton.css';

class GroupMenuButton extends Component {

    render() {
        return(
            <div class="group-button" onClick={this.props.onClick}>{this.props.value}</div>
        )
    }
}

export default GroupMenuButton;