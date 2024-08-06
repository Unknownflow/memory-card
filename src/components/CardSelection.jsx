import Card from "./Card";

function CardSelection({ allPokemons, checkMove }) {
  return (
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
  )
}

export default CardSelection;

