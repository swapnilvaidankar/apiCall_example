import React, { Component } from "react";

class Hello extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: 1,
          name: "michael"
        },
        {
          id: 2,
          name: "john"
        },
        {
          id: 3,
          name: "smith"
        }
      ]
    };
  }
  render() {
    return <div>{this.state.data.map((d, i) => <p>{d.name}</p>)}</div>;
  }
}

export default Hello;
