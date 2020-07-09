import React, { Component } from "react";
class Simpletextarea2 extends Component {
  constructor() {
    super();
    this.state = {
      textAreaValue: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {
    this.setState({ textAreaValue: event.target.value });
  }
  render() {
    return (
      <div>
        <span>
          Evento:
        </span>
      <textarea
      
        value={this.state.textAreaValue}
        onChange={this.handleChange}
        wrap="off"
      
      />
      
    </div>
    );
  }
}

export default Simpletextarea2;
