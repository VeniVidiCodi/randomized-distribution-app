import React, { Component } from 'react';


function FooterButton(props) {

  return (
      <div className="">
        <div className="footer-button" type="submit" value={props.value} onClick={props.onClick}>{props.text}</div> 
      </div>

  );
}

export default FooterButton;
