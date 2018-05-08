import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
//requires the component and the Axios library for sending API requests
import Test from "./test.js";
import axios from "axios";

var headers = {
  "Content-Type": "application/json; charset=utf-8"
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sendData: "<no data entered!>",
      receiveData: "<no data came back yet!>"
    };
  }

  handleClick(event) {
    //binds the App component to a local variable
    var lself = this;
    var payload = {
      test: this.state.sendData
    };

    //sends tha ajax request to localhost
    axios
      .post("http://127.0.0.1:3001/test", payload, headers)
      .then(function(response) {
        console.log(response);
        console.log(lself);
        //once a response is recieved, set the state to the response data
        lself.setState({ receiveData: response.data.rdata });
        console.log(response.data.rdata);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        //this is our test component! we can pass it the states as parameters!
        <Test
          senddata={this.state.sendData}
          receivedata={this.state.receiveData}
        />
        <input
          onChange={event => this.setState({ sendData: event.target.value })}
        />
        <button onClick={event => this.handleClick(event)}>Click me!</button>
        <p> {this.state.receiveData}</p>
      </div>
    );
  }
}

export default App;
