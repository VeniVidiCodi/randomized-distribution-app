import React, { Component } from 'react';
import './RosterItem.css';
// import RosterListItem from '../GroupListItem/GroupListItem';

class RosterItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.description,
            showDescription: true,
            setDescription: this.props.setDescription
        }
    }    


    changeDescription = (e) => {
        this.toggleDescription();
    }
    
    toggleDescription = () => {
        console.log("Toggling Roster Item Description");
        // this.props.handleChange();

        if (this.state.showDescription) {
            console.log("T -> F");
            this.setState({showDescription: false})
        } else {
            console.log("F -> T");
            this.setState({showDescription: true})
        };
    }

    handleChange = (event) => {
        console.log(event);
        this.setState({description: event.target.value});
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.toggleDescription();
    }

    
    render() {
    // let name = this.props.name;
    // let key = this.props.key;
    // let group = this.props.group;

        return(
            <div className="roster-item-container">
                {/* <div className="roster-item-text"> */}
                    { this.state.showDescription ?
                        <div className="roster-item-text" onClick={this.changeDescription}>{this.state.description}</div>
                        :
                        <form className="input-wrapper" onSubmit={this.handleSubmit}>
                        <label>
                            <input id="project-title--input" type="text" name="name" placeholder="ADD ROSTER TITLE" onChange={this.handleChange} value={this.state.description} />
                        </label>
                        <input className="title-submit-button" onClick={this.state.setDescription} type="submit" value="✓" />
                        </form>
                    }

                    <button className="roster-del-btn" onClick={this.props.delete}>x</button>
                {/* </div> */}
            </div>
        );
    }
}

export default RosterItem;