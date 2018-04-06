import React, { Component } from "react";

class Hello extends Component {
  constructor() {
    super();
    this.state = {
      results_res: []
    };
  }
  componentDidMount() {
    console.log("ComponentDidMount ");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(result => {
        this.setState({
          results_res: result
        });
        console.log(result);
        console.log("2 :: " + this.state.results_res);
      });
  }
  render() {
    const res = this.state.results_res;
    const users = res.map(item => (
      <li>
        {item.name}
        <ul>
          <li>{item.address.street}</li>
        </ul>
      </li>
    ));

    return (
      <div>
        <ul>{users}</ul>
      </div>
    );
  }
}

export default Hello;
