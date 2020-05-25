import React, { Component } from 'react';

interface IState {
  password : string;
}

class Generator extends Component<{}, IState> {
  constructor(props : any) {
    super(props);
    this.state = {
      password : "password123"
    }
  }

  generatePassword = (type : string) : void => {
    let new_password : string = "Build the actual mechanics."
    this.setState({password : new_password})
  }

  render() {
    return (
      <div id = "generator-wrapper">
        <div id = "password-output">
          <span>{this.state.password}</span>
        </div>
        <div className = "button-wrapper">
          <button onClick = {() => this.generatePassword('weak')}>Weak <span>password</span></button>
          <button onClick = {() => this.generatePassword('strong')}>Strong <span>password</span></button>
        </div>
      </div>
    )
  }
}
export default Generator;
