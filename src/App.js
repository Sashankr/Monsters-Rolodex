import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "Sashank",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Monsters Rolodex</h2>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hello {this.state.name}
          </a>
        </header>
      </div>
    );
  }
}

export default App;
