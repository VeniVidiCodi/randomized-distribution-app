// import  React, { Component } from 'react';
import { Link } from 'react-router-dom';   //may or may not need
import FooterButton from '../FooterButton/FooterButton';
import './Footer.css';

function Footer (props) {
    // If from the Input Page, user is on Result Page
   if (props.fromLandingPage  || props.saveButtonClicked) {
     // console.log('ON input page...');
     return (
       <footer id="app-footer">
           <FooterButton
               value={props.value}
               text="Edit"
               onClick={props.onClickEdit} />
       </footer>
     )
   } else if (props.fromInputPage) {
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
    } else {
      return (
        <footer id="app-footer">
          <Link to="/grouper">
            <FooterButton
                value={props.value}
                text="Shuffle"
                onClick={props.onClickShuffle} />
          </Link>
        </footer>
      )
    }
  }


export default Footer;
