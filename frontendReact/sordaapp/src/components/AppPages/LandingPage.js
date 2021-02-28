import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../../mallard.svg';
import './LandingPage.css';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    //   idNumber: null
    }
  }

  render(){
    return (
      <div class="wrapper">

            <div class="topSection">
                <img src={logo} alt="duck logo" />
            </div>

            <div class="bottomSection">
                <div class="buttonChild">
                  <Link to="/grouper">
                    <button type="submit" value="Submit" id="btn-start">Create Group</button>
                  </Link>
                </div>
                <div class="inputChild">
                    <form action="/resultsPage" method="post">
                        <input type="text" name="AccessID" placeholder="Enter ID" class="textField" maxlength="7" />
                        <button type="submit" name="getResultsPage" class="submit">GO</button>
                    </form>
                </div>
            </div>

      </div>
    );
  }
}

export default LandingPage;


/*
<form action="/grouper" method="">
    <button type="submit" value="Submit" id="btn-start">Create Group</button>
</form>*/
