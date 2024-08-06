function Result({ gameStatus }) {
  if (gameStatus != null) {
    const [message, score] = gameStatus;
    return (
      <div className="result">
        {message} Your score was {score}.
      </div>
    )  
  } 
}

export default Result;