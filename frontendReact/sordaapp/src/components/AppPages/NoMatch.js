import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../../mallard.svg';
import './NoMatch.css';

class NoMatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
    //   idNumber: null
    }
  }

  render(){
    return (
      <div class="wrapper">

            {/* <div class="topSection">
                <img src={logo} alt="duck logo" />
            </div> */}
            <div class="topSection">
                <h1>404</h1>
                <h4>Oops! You are looking for something that doesn't exist.</h4>
                <img src="https://media.giphy.com/media/xvGEx3cazysda/giphy.gif" alt="upside down duck in water" />
            </div>

            <div class="bottomSection">
                <div class="buttonChild">
                  <Link to="/">
                    <button type="submit" value="Submit" id="btn-start">Home</button>
                  </Link>
                </div>
            </div>

      </div>
    );
  }
}

export default NoMatch;