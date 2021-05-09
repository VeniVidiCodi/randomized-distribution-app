import React, { useState } from 'react';
import './TitleBar.css';


function TitleBar(props) {
  let [showTitle, setShowTitle] = useState(true);

  let handleChange = (event) => {
    console.log('Handling Change: ' + event.target.value);
    props.setTitle(event.target.value);
  }

  let handleSubmit = (event) => {
    console.log('Submitting title: ' + event.target.value);
    toggleTitle();
  }

  let toggleTitle = () => {
    console.log("Toggling Title" );
    if (showTitle) {
      console.log("T -> F");
      setShowTitle(false);
    } else {
      console.log("F -> T");
      setShowTitle(true);
    };
  }

  return (
          <section className="titlebar project-title-container">
            <h3>Project Name:</h3>

            { showTitle ?
              <h2 className="title-display" onClick={toggleTitle} onChange={handleChange}>{props.title}</h2> 
              : 
              <form className="input-wrapper">
              {/* <form className="input-wrapper" onSubmit={props.handleSubmit}> */}
                <label>
                  <input id="project-title--input" type="text" name="name" placeholder={props.title} onChange={handleChange} value={props.title} />
                </label>
                <input className="title-submit-button" onClick={handleSubmit} type="submit" value="✓" />
              </form>
            }
          </section>
  );
}

export default TitleBar;