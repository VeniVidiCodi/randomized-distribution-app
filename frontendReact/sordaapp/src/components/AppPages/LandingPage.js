import React, { Component } from 'react';
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
                    <form action="/reactApp" method="">
                        <button type="submit" value="Submit" id="btn-start">Create Group</button>
                    </form>
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
