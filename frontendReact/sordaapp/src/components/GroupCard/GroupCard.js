import React, { Component } from 'react';
import './GroupCard.css';
// import GroupListItem from '../GroupListItem/GroupListItem';

export default class GroupCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            id: props.id,
            showTitle: true,
            setTitle: this.props.setTitle
        }
        // this.toggleTitle = this.toggleTitle.bind(this);
        // this.handleChange = this.handleChange.bind(this);
    }
    
    toggleTitle = () => {
        console.log("Toggling Title");
        this.props.handleChange();

        if (this.state.showTitle) {
            console.log("T -> F");
            this.setState({showTitle: false})
        } else {
            console.log("F -> T");
            this.setState({showTitle: true})
        };
    }
    handleChange = (event) => {
        this.setState({title: event.target.value});
    }
    handleSubmit = (event) => {
        // alert('A title was submitted: ' + this.state.title);
        event.preventDefault();
        this.toggleTitle();
    }

render() {
    return(
        <div className="group-container">
            <div className="group-card--header">
                {/* <div className="group-title" onClick={this.props.handleChange}>{this.state.title}</div> */}
                { this.state.showTitle ?
                    <div className="group-title" onClick={this.toggleTitle}>{this.state.title}</div>
                    // <h2 className="title-display" onClick={this.toggleTitle} onChange={this.handleChange}>{this.state.title}</h2> 
                    :
                    <form className="input-wrapper" onSubmit={this.handleSubmit}>
                    <label>
                        <input id="project-title--input" type="text" name="name" placeholder="ADD GROUP TITLE" onChange={this.handleChange} value={this.state.title} />
                    </label>
                    <input className="title-submit-button" onClick={this.state.setTitle} type="submit" value="✓" />
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
}