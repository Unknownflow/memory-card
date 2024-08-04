function Header({ score, maxScore }) {
  return (
    <div className="header">
      <div>Pokemon memory card game</div>
      <div className="scoreboard">
        <span>Score: {score}</span>
        <span>Max score: {maxScore}</span>
      </div>
    </div>
  )
}

export default Header;