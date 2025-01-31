import React, { useEffect, useState } from "react";
import Tile from "../Card/Card";
import "./CardListWithEvents.css";
import {
  eventDispatch,
  eventSubscribe,
  eventUnsubscribe,
} from "../../utils/events";
import { events } from "./events";

interface tile {
  title: string;
  description: string;
}

const CardList = () => {
  const [tiles, setTiles] = useState<tile[]>([]);

  // react init
  useEffect(() => {
    eventDispatch(events.init);
    const handleUpdate = (event: CustomEvent) => {
      setTiles(event.detail);
    };
    eventSubscribe(events.update, handleUpdate);
    return () => {
      eventUnsubscribe(events.update, handleUpdate);
    };
  }, []);

  return (
    <div style={styles.cardList} className="cards-list">
      {tiles.map((card, index) => (
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
