import React, { Component } from 'react';
import './TitleBar.css';

class TitleBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title : this.props.title,
      showTitle: false,
      setTitle: this.props.setTitle
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleTitle = this.toggleTitle.bind(this);
  }

  handleChange(event) {
    this.setState({title: event.target.value});
  }
  handleSubmit(event) {
    // alert('A title was submitted: ' + this.state.title);
    event.preventDefault();
    this.toggleTitle();
  }

  toggleTitle() {
    console.log("Toggling Title");
    if (this.state.title === true) {
        console.log("T -> F");
        this.setState({showTitle: false})
      } else{
        console.log("F -> T");
        this.setState({showTitle: true})
      };
  }

  render() {
    console.log("SHOWTITLE?", this.state.showTitle)
    return (
            <section className="titlebar project-title-container">
                {/* <h2 onChange={this.handleChange}>{this.state.title}</h2> */}

              { this.state.showTitle === true ?
                <h2 className="title-display" onClick={this.toggleTitle} onChange={this.handleChange}>{this.state.title}</h2> :
                // <div className="input-wrapper">
                //   <input id="project-title--input" type="text" placeholder="ADD PROJECT TITLE" onChange={this.handleChange}/>
                //   <div className="title-submit-button" onClick={this.props.setTitle}>✓</div>
                // </div>
              <form className="input-wrapper" onSubmit={this.handleSubmit}>
                <label>
                  Project Name:
                  <input id="project-title--input" type="text" name="name" placeholder="ADD PROJECT TITLE" onChange={this.handleChange} />
                </label>
                <input className="title-submit-button" onClick={this.state.setTitle} type="submit" value="✓" />
              </form>
              }
            </section>
    );
  }
}
export default TitleBar;