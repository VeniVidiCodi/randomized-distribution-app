import  React, { Component } from 'react';
import {Link} from 'react-router-dom';   //may or may not need
import FooterButton from '../FooterButton/FooterButton';
import './Footer.css';

function Footer(props){

    //returns if the ResultsPage is coming from LandingPage
    if (props.isTrue) {
      return (
        <footer id="app-footer">
          <Link to="/grouper">
            <FooterButton
                value={props.value}
                text="Edit"
                onClick={props.onClickEdit} />
          </Link>
        </footer>
      )
    } else {
      //returns if the ResultsPage is coming from InputPage
      return(
          <footer id="app-footer">
              <FooterButton
                  value={props.value}
                  text="Save"
                  onClick={props.onClickSave} />
              <FooterButton
                  value={props.value}
                  text="Edit"
                  onClick={props.onClickEdit} />
          </footer>
      )
    }
  }


export default Footer;
