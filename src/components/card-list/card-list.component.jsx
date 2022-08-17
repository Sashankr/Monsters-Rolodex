import { Component } from "react";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    // console.log("render");
    return (
      <div>
        {monsters.map((data) => {
          return <h1 key={data.id}>{data.name}</h1>;
        })}
      </div>
    );
  }
}

export default CardList;
