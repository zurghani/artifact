import React, { useEffect, useState } from "react";
import Tile from "../Card/Card";
import "./CardList.css";
import {
  eventDispatch,
  eventSubscribe,
  eventUnsubscribe,
} from "../../utils/events";
import { events } from "./events";
interface CardListProps {
  cards: { title: string; description: string }[];
}

const EventCardList: React.FC<CardListProps> = ({ cards }) => {
  const [list, setList] = useState(cards);
  useEffect(() => {
    eventDispatch(events.init);

    const handleReceiveEvents = (e: CustomEvent) => {
      console.log(e.detail);
      // setList(e.detail)
    };

    eventSubscribe(events.receive, handleReceiveEvents);
    return () => {
      eventUnsubscribe(events.receive, handleReceiveEvents);
    };
  }, []);
  return (
    <div style={styles.cardList} className="cards-list">
      {list.map((card, index) => (
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

export default EventCardList;
