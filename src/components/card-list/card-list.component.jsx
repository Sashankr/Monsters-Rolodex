import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.style.css";
class CardList extends Component {
  render() {
    const { monsters } = this.props;
    // console.log("render");
    return (
      <div className="card-list">
        {monsters.map((data) => {
          const { name, email, id } = data;
          return <Card key={id} name={name} email={email} id={id} />;
        })}
      </div>
    );
  }
}

export default CardList;
