import React, { Component } from 'react';
import './TitleBar.css';

class TitleBar extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
            <section className="titlebar project-title-container">
              { this.props.title ?
                <h2 onClick={this.props.toggleTitle}>{this.props.title}</h2> :
                <div className="input-wrapper">
                  <input id="project-title--input" type="text" placeholder="ADD PROJECT TITLE" />
                  <div className="title-submit-button" onClick={this.props.setTitle}></div>
                </div>
              }
            </section>
    );
  }
}
export default TitleBar;