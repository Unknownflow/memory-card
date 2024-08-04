import { useState } from "react"
import Header from "./components/Header";
import './styles/styles.css'
import Card from "./components/Card";

function App() {
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [discoveredCards, setDiscoveredCards] = useState([]);
  const cards = ['a', 'b', 'c', 'd', 'e']
  const winCondition = 5;

  const discoverCard = (card) => {
    const currScore = score;
    setScore(currScore+1);
    
    console.log('scores', currScore, maxScore)
    // update max score if score is greater than max score
    if (currScore+1 >= maxScore) {
      setMaxScore(currScore+1);
    }

    // check if score matches win condition
    if (winCondition == currScore+1) {
      console.log('won game');
    }

    setDiscoveredCards(prevCards => [...prevCards, card]);
    console.log('discovered cards:', discoveredCards)
  }

  const checkMove = (card) => {
    // card which was discovered was picked
    if (discoveredCards.includes(card)) {
      console.log("lost game");
      setScore(0);
    } else {
      // discover the card and update max score 
      discoverCard(card);
    }
  }

  const restartGame = () => {
    setScore(0);
    setDiscoveredCards([]);
  }

  const shuffle = (array) => {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }

  return ( 
    <>
      <Header score={score} maxScore={maxScore} />
      <div className="cardSelection">
        {cards.map((card) => {
          return (
          <Card 
            key={card} 
            onClick={(e) => {checkMove(card)}}
            cardName={card}
          >
          </Card>
          )

        })}
      </div>
      
    </>
  )
}

export default App
