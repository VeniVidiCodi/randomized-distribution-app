import React, { useState, useEffect} from 'react';
import './TitleBar.css';


function TitleBar(props) {
  let [showTitle, setShowTitle] = useState(true);
//  console.log(props.title);
  // useEffect(() => {
  //   props.updateTitle("My projecttt");
  // })

  let onChange = (event) => {
    console.log('Handling Change: ' + event.target.value);
    props.updateTitle(event.target.value);
  }

  // let handleSubmit = (event) => {
  //   console.log('Submitting title: ' + event.target.value);
  //   toggleTitle();
  // }

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
              {/* <form className="input-wrapper" onSubmit={props.handleSubmit}> */}
                <label>
                  <input id="project-title--input" type="text" name="name" placeholder={props.title} onChange={onChange} value={props.title} /* NOT UPDATING PROPS VALUE */ />  
                </label>
                <input className="title-submit-button" onClick={toggleTitle} type="submit" value="✓" />
              </form>
            }
          </section>
  );
}

export default TitleBar;