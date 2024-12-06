import "./App.css";
import CardList from "./components/CardList/CardList";

function App() {
  const cardData = [
    { title: "Card 1", description: "Description for card 1" },
    { title: "Card 2", description: "Description for card 2" },
    { title: "Card 3", description: "Description for card 3" },
    { title: "Card 4", description: "Description for card 4" },
    { title: "Card 5", description: "Description for card 5" },
    { title: "Card 6", description: "Description for card 6" },
    { title: "Card 7", description: "Description for card 7" },
    { title: "Card 8", description: "Description for card 8" },
    { title: "Card 9", description: "Description for card 9" },
  ];

  return (
    <div>
      <h1>Card List</h1>
      <CardList cards={cardData} />
    </div>
  );
}

export default App;
