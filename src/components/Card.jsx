function Card({ cardName, onClick}) {
  console.log(cardName, onClick)
  return (
    <div 
      className="card" 
      onClick={onClick}
    >
      <p className="cardName">{ cardName }</p>
    </div>
  )
}

export default Card;