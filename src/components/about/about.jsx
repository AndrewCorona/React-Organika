import React, { Component } from "react";

class About extends Component {
  state = {
    emailVisible: false,
  };
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">About me</h1>
        <p className="lead">This is some information about me</p>

        {this.getEmailText()}

        <button onClick={this.onButtonClicked}>
          {this.state.emailVisible ? "Hide email" : "Show email"}
        </button>
      </div>
    );
  }

  onButtonClicked = () => {
    this.setState({ emailVisible: !this.state.emailVisible });
  };

  getEmailText = () => {
    if (this.state.emailVisible) {
      return (
        <div>
          <a href="mailto:contact@mail.com">Email me</a>
        </div>
      );
    }
    return (
      <div>
        <label>Click the button to see my email!</label>
      </div>
    );
  };
}

export default About;
