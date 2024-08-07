function Difficulty({updateGameBoard}) {
  return (
    <div className="difficultyChoice">
      <button 
        className="difficultyChoiceButton"
        onClick={(e) => updateGameBoard(5)}
      >
          Easy
      </button>
      <button 
        className="difficultyChoiceButton"
        onClick={(e) => updateGameBoard(10)}
      >
          Medium
      </button>
      <button         
        className="difficultyChoiceButton"
        onClick={(e) => updateGameBoard(15)}
      >
        Hard
      </button>
    </div>
  )
} 

export default Difficulty;