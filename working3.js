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
    fetch("https://randomuser.me/api/")
      .then(res => res.json())
      .then(result => {
        this.setState({
          results_res: result.results
        });
        console.log(result);
        console.log("2 :: " + this.state.results_res);
      });
  }
  render() {
    const res = this.state.results_res;
    const users = res.map(item => (
      <li>
        {item.name.last}
        <img src={item.picture.large} />
      </li>
    ));
    const users1 = res.map(item => (
      <li>
        {item.name.last}
        <img src={item.picture.large} />
      </li>
    ));

    return (
      <div>
        <ul>
          {users}
          {users1}
        </ul>
      </div>
    );
  }
}

export default Hello;
