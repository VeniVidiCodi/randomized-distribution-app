// import React, { useState, useEffect } from 'react';
import './TitleBar.css';


function TitleBar(props) {

  return (
          <section className="titlebar project-title-container">
            <h3>Project Name:</h3>

            { props.showTitle ?
              <h2 className="title-display" onClick={props.toggleTitle} onChange={props.handleChange}>{props.title}</h2> 
              : 
              <form className="input-wrapper">
              {/* <form className="input-wrapper" onSubmit={props.handleSubmit}> */}
                <label>
                  <input id="project-title--input" type="text" name="name" placeholder={props.title} onChange={props.handleChange} value={props.title} />
                </label>
                <input className="title-submit-button" onClick={props.handleSubmit} type="submit" value="✓" />
              </form>
            }
          </section>
  );
}

export default TitleBar;