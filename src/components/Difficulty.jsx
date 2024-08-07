function Difficulty({updateGameBoard}) {
  return (
    <div className="difficultyChoice">
      <button 
        className="difficultyChoiceButton"
        onClick={(e) => updateGameBoard(6)}
      >
          Easy
      </button>
      <button 
        className="difficultyChoiceButton"
        onClick={(e) => updateGameBoard(12)}
      >
          Medium
      </button>
      <button         
        className="difficultyChoiceButton"
        onClick={(e) => updateGameBoard(18)}
      >
        Hard
      </button>
    </div>
  )
} 

export default Difficulty;