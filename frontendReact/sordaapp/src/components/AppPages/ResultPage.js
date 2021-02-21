import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      titled: false
    }
    this.setTitle = this.setTitle.bind(this);
  }

  setTitle(e) {
    console.log("Setting Title");
    // TODO: get input value from TitleBar Component
    let title = e.target.value;
    console.log(title);
    // this.setState({title: title});
    this.setState({title: e.target.value});

  }

  render(){
    return (
      <div>
          RESULTS PAGE
      </div>
    );
  }
}

export default App;
