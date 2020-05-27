import React, { Component } from 'react';
import copy_icon from '../resources/images/copy-icon.png';

interface IState {
  password : string;
}

function randomNumber(min : number, max : number) : number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Generator extends Component<{}, IState> {
  constructor(props : any) {
    super(props);
    this.state = {
      password : "mPuYsj6d"
    }
  }
  handleChange = (event : any) : void => {
    let value : string = event.target.value;
    this.setState({password : value});
  }

  // Copies the current value of the input element onto the clipboard
  copyText = () : void => {
    (document.getElementById('password') as HTMLInputElement).select();
    document.execCommand("copy");
  }

  getPassword = (length : number) : void => {
    // This divides the possible character values a-z A-Z 0-9 into sets of arrays
    let sets : number[][] = [[48, 57], [65, 90], [97, 122]];
    let password : string = "";

    for (let i : number = 0; i < length; i++) {
      let currentSet : number[] = sets[randomNumber(0, 2)]; // Get a random set A-Z and get the charcode from it
      password += String.fromCharCode(randomNumber(currentSet[0], currentSet[1]));
    }
    this.setState({password : password});
  }
  render() {
    return (
      <div id = "generator-wrapper">
        <div id = "password-output">
          <input type = "text" id = "password" value = {this.state.password} onChange = {this.handleChange}/>
          <img src = {copy_icon} onClick = {this.copyText} alt = "copy"/>
        </div>
        <div className = "button-wrapper">
          <button onClick = {() => this.getPassword(8)}>Weak <span>password</span></button>
          <button onClick = {() => this.getPassword(12)}>Strong <span>password</span></button>
        </div>
      </div>
    )
  }
}
export default Generator;
