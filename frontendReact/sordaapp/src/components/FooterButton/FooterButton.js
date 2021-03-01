import React, { Component } from 'react';


function FooterButton(props) {

  return (
      <div className="">
        <div className="footer-button" type="submit" value={props.value} onClick={() => console.log("SAVE BUTTON CLICKED...")}>{props.text}</div> 
      </div>

  );
}

export default FooterButton;
