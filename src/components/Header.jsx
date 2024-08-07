import Difficulty from "./Difficulty";

function Header({ score, maxScore, updateGameBoard }) {
  return (
    <div className="header">
      <div>Pokemon memory card game</div>
      <div>
      <Difficulty
        updateGameBoard={updateGameBoard}
      />
      </div>
      <div className="scoreboard">
        <span>Score: {score}</span>
        <span>Max score: {maxScore}</span>
      </div>
    </div>
  )
}

export default Header;