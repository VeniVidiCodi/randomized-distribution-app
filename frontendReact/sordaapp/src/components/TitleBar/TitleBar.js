import React, { Component } from 'react';
import './TitleBar.css';

class TitleBar extends Component {
 render() {
    return (
            <section class="titlebar project-title-container">
                <input id="project-title--input" type="text" placeholder="ADD PROJECT TITLE" />
            </section>
    );
  }
}
export default TitleBar;