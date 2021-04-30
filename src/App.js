import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: [],
    };
  }
  componentDidMount() {
    this._getHello();
  }
  _getHello = async () => {
    const res = await axios.get("/api/db");
    this.setState({ hello: res.data.products });
    console.log(this.state.hello);
  };

  render() {
    return (
      <>
        <h3>
          {" "}
          {this.state.hello.map((hello1) => (
            <div>{hello1.temp}</div>
          ))}{" "}
          - connected to server from App.js{" "}
        </h3>
      </>
    );
  }
}
export default App;
