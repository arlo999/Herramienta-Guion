import React, { Component } from "react";
class Dialogo extends Component {
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
      <div >
        
      <textarea
      
        value={this.state.textAreaValue}
        onChange={this.handleChange}
        wrap="off"
        rows={10}
        cols={100}
      />
      
    </div>
    );
  }
}

export default Dialogo;
