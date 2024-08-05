import { useState } from "react"
import Header from "./components/Header";
import './styles/styles.css'
import Card from "./components/Card";
import Result from "./components/Result";
import Restart from "./components/Restart";

function App() {
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [discoveredCards, setDiscoveredCards] = useState([]);
  const [cards, setCards] = useState(['a', 'b', 'c', 'd', 'e'])
  const winCondition = 5;
  const [gameStatus, setGameStatus] = useState(null);

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
      setGameStatus("You won!")
    } else {
      setGameStatus(null)
    }

    setDiscoveredCards(prevCards => [...prevCards, card]);
    shuffle();
    console.log('discovered cards:', discoveredCards)
  }

  const checkMove = (card) => {
    // disallow any moves to be made if game is lost or won
    if (gameStatus == "You lost!" || gameStatus == "You won!") {
      return;
    }

    // card which was discovered was picked
    if (discoveredCards.includes(card)) {
      console.log("lost game");
      setGameStatus("You lost!")
      setScore(0);
    } else {
      // discover the card and update max score 
      discoverCard(card);
    }
  }

  const restartGame = () => {
    setScore(0);
    setGameStatus(null)
    setDiscoveredCards([]);
  }

  const shuffle = () => {
    let currentIndex = cards.length;
    
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [cards[currentIndex], cards[randomIndex]] = [
        cards[randomIndex], cards[currentIndex]];
    }
    setCards(cards)
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
      <Restart restartGame={restartGame} />
      <Result gameStatus={gameStatus} />
    </>
  )
}

export default App
