import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      hello: [],
    };
  }
  componentDidMount() {
    this._getHello();
  }
  _getHello = async () => {
    const res = await axios.get("/api/db/select");
    this.setState({ hello: res.data.products, id: res.data.id });
    console.log(this.state.hello);
  };

  render() {
    return (
      <>
        <h3>
          {this.state.hello.map((table) => (
            <div key={table.temp}>{table.temp}</div>
          ))}
          - connected to server from App.js
        </h3>
      </>
    );
  }
}
export default App;
