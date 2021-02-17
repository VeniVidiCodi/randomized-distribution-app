import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
 render() {
    return (
        <nav className="app-nav">
            <div className="title-container">
                <img className="app-logo" src={this.props.logo} alt="duck"/>
                <div className="app-title">SORDA</div>
            </div>
            <div className="nav-menu">
                <a href="#">
                    <menu></menu>
                </a>
            </div>
        </nav>

    );
  }
}
export default Nav;