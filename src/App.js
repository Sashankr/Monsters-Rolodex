import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setMonsters(users);
      });
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [searchField, monsters]);

  const onSearchChange = (event) => {
    const searchFieldText = event.target.value.toLowerCase();
    setSearchField(searchFieldText);
  };

  const incrementCount = () => {
    setCount((count) => count + 1);
  };

  return (
    <div>
      <h1 className="app-title">
        Monsters Rolodex <span onClick={incrementCount}>{count}</span>{" "}
      </h1>
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
