function Card({ image, cardName, onClick }) {
  return (
    <>
      <div 
        className="card" 
        onClick={onClick}
      >
        <div>
          <img className="pokemonImg" src={image} alt={cardName} />
        </div>
        <div>
          <p className="cardName">{cardName}</p>
        </div>
      </div>
    </>
  )
}

export default Card;