import React, { useState, useEffect} from 'react';
import './TitleBar.css';


function TitleBar(props) {
  let [showTitle, setShowTitle] = useState(true);

  useEffect(() => {
    console.log("TITLE BAR mounted");
  })

  let handleChange = e => {
    console.log('Handling Change: ' + e.target.value);
    props.updateTitle(e.target.value);
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
              <h2 className="title-display" onClick={toggleTitle} >{props.title}</h2> 
              : 
              <form className="input-wrapper">
                <label>
                  <input id="project-title--input" type="text" name="name" placeholder={props.title} onChange={handleChange} value={props.title} />  
                </label>
                <input className="title-submit-button" onClick={toggleTitle} type="submit" value="✓" />
              </form>
            }
          </section>
  );
}

export default TitleBar;