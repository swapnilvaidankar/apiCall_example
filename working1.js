import React, { Component } from "react";

class Hello extends Component {
  constructor() {
    super();
    this.state = {
      results: [
        {
          gender: "male",
          name: {
            title: "mr",
            first: "jorge",
            last: "davies"
          },
          location: {
            street: "3711 chester road",
            city: "winchester",
            state: "cleveland",
            postcode: "X87 3PL"
          },
          email: "jorge.davies@example.com",
          login: {
            username: "silverostrich764",
            password: "crystal1",
            salt: "HwCS4hNw",
            md5: "f4d793bf9a8759d012c0a7fea3327afe",
            sha1: "92b28317419f704f8fbefcdedf68e0fbadea2779",
            sha256:
              "6e052ce9ddb4a92d15e2fbb486b22cf8f35f1baf668dbc9d0495362aa6d3461e"
          },
          dob: "1980-10-27 01:15:21",
          registered: "2009-09-05 22:17:34",
          phone: "017683 92454",
          cell: "0738-763-439",
          id: {
            name: "NINO",
            value: "WE 37 99 04 S"
          },
          picture: {
            large: "https://randomuser.me/api/portraits/men/28.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/28.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/28.jpg"
          },
          nat: "GB"
        }
      ],
      info: {}
    };
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.results.map((d, i) => (
            <li>
              {d.name.first} {d.name.last}
              <img src={d.picture.large} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Hello;
