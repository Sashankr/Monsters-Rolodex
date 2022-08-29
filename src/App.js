import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";
import { useState } from "react";

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

// const filteredMonsters = monsters.filter((monster) => {
//   return monster.name.toLowerCase().includes(searchField);
// });

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeholder={"search monsters"}
//           className={"monsters-search-box"}
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

const App = () => {
  console.log("render");

  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchField);
  });

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      setMonsters(users);
    });

  const onSearchChange = (event) => {
    const searchFieldText = event.target.value.toLowerCase();
    setSearchField(searchFieldText);
  };

  return (
    <div>
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder={"search monsters"}
        className={"monsters-search-box"}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
