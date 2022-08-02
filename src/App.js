import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState(
          () => {
            return {
              monsters: users,
            };
          },
          () => {}
        );
      });
  }

  render() {
    console.log("render");

    return (
      <div className="App">
        <input
          type="search"
          placeholder="search monsters"
          onChange={(event) => {
            const filteredMonsters = this.state.monsters.filter((monster) => {
              return monster.name.includes(event.target.value);
            });
            console.log(filteredMonsters);
          }}
        />
        {this.state.monsters.map((data) => {
          return <h1 key={data.id}>{data.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
