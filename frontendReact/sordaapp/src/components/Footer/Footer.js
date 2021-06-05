// import  React, { Component } from 'react';
import { Link } from 'react-router-dom';   //may or may not need
import FooterButton from '../FooterButton/FooterButton';
import './Footer.css';

function Footer (props) {

    //returns if not from the input page (is on the input page)
    if (!props.fromInputPage) {
      // console.log('ON input page...');
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
    } else {
      // console.log('FROM input page...');
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
