import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
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
    return (
      <div className="App">
        <input
          type="search"
          placeholder="search monsters"
          onChange={(event) => {
            const filteredMonsters = this.state.monsters.filter((monster) => {
              return monster.name
                .toLowerCase()
                .includes(event.target.value.toLowerCase());
            });
            console.log(filteredMonsters);
            this.setState(() => {
              return {
                monsters: filteredMonsters,
              };
            });
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
