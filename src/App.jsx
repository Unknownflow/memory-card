import { useEffect, useState } from "react"
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
  const [gameStatus, setGameStatus] = useState(null);
  const winCondition = 10;

  // loading pokemon data via pokeapi
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadPoke, setLoadPoke] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=" + winCondition
  )
  const getAllPokemons = async () => {
    const res = await fetch(loadPoke);
    const data = await res.json();
    setLoadPoke(data.next);

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const pokeRes = await fetch(pokemon.url)
        const pokeData = await pokeRes.json();
        setAllPokemons(
          (currentList) => [...currentList, pokeData]
        )
      })
    }
    createPokemonObject(data.results)
  }

  useEffect(() => {
    getAllPokemons();
  }, []);

  const discoverCard = (card) => {
    const currScore = score;
    setScore(currScore+1);
    
    // update max score if score is greater than max score
    if (currScore+1 >= maxScore) {
      setMaxScore(currScore+1);
    }

    // check if score matches win condition
    if (winCondition == currScore+1) {
      setGameStatus("You won!")
    } else {
      setGameStatus(null)
    }

    setDiscoveredCards(prevCards => [...prevCards, card]);
    shuffle();
  }

  const checkMove = (card) => {
    // disallow any moves to be made if game is lost or won
    if (gameStatus == "You lost!" || gameStatus == "You won!") {
      return;
    }

    // card which was discovered was picked
    if (discoveredCards.includes(card)) {
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
    let currentIndex = allPokemons.length;
    
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [allPokemons[currentIndex], allPokemons[randomIndex]] = [
        allPokemons[randomIndex], allPokemons[currentIndex]];
    }
    setAllPokemons(allPokemons)
  }

  return ( 
    <>
      <Header score={score} maxScore={maxScore} />
      <div className="cardSelection">
        {allPokemons.map((pokemon, index) => {
          return (
          <Card 
            image={pokemon.sprites.other.dream_world.front_default}
            key={index} 
            onClick={(e) => {checkMove(pokemon.name)}}
            cardName={pokemon.name}
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
