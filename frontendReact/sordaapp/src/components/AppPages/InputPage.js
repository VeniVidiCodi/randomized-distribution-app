import React, { Component } from 'react';
import TitleBar from '../TitleBar/TitleBar';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }

  setTitle(e) {
    console.log("Setting Title");
    // TODO: get input value from TitleBar Component
    let title = e.target.value;
    console.log(title);
    this.setState({title: title});
    // this.setState({title: e.target.value});
  }


  render(){
    return (
        <div>
          <header className="App-header">
            INPUT PAGE
            <Nav />
            <TitleBar/>
          </header>

          <main id="entry-container">
            {/* <GroupSection state={this.props.state} /> */}
            {/* <RosterSection /> */}
            <Footer />
          </main>

        </div>
    );
  }
}

export default Input;
