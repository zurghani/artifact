import React from "react";
import Tile from "../Card/Card";
import "./CardList.css";
interface CardListProps {
  cards: { title: string; description: string }[];
}

const CardList: React.FC<CardListProps> = ({ cards }) => {
  return (
    <div style={styles.cardList} className="cards-list">
      {cards.map((card, index) => (
        <Tile key={index} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

const styles: { cardList: React.CSSProperties } = {
  cardList: {
    display: "flex",
    flexWrap: "wrap", // Use one of the valid values: 'nowrap', 'wrap', or 'wrap-reverse'
    gap: "16px",
  },
};

export default CardList;
