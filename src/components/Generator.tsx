import React, { Component } from 'react';
import copy_icon from '../resources/images/copy-icon.png';

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
  handleChange = (event : any) : void => {
    let value : string = event.target.value;
    this.setState({password : value});
  }
  copyText = () : void => {
    (document.getElementById('password') as HTMLInputElement).select();
    document.execCommand("copy");
  }
  getStrongPassword = () : void => {

  }
  getWeakPassword = () : void => {

  }
  render() {
    return (
      <div id = "generator-wrapper">
        <div id = "password-output">
          <input type = "text" id = "password" value = {this.state.password} onChange = {this.handleChange}/>
          <img src = {copy_icon} onClick = {this.copyText} alt = "copy"/>
        </div>
        <div className = "button-wrapper">
          <button onClick = {this.getWeakPassword}>Weak <span>password</span></button>
          <button onClick = {this.getStrongPassword}>Strong <span>password</span></button>
        </div>
      </div>
    )
  }
}
export default Generator;
