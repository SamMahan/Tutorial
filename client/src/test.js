import React, { Component } from "react";

class Test extends Component {
  render() {
    return (
      <div>
        <p> here is the value you entered {this.props.senddata}</p>
        <p> here is the value you got back {this.props.receivedata}</p>
      </div>
    );
  }
}
export default Test;
