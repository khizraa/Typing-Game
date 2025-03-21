import "../styling/GameUI.css"

function StartGame({ onClick }) {
    return (
      <>
        <div className="start-container">
          <h1 className="start-title">Typing Game</h1>
          <p className="start-description">
          Test your typing speed and accuracy! ⌨️💨 Type the given words as fast as you can before time runs out. 
          Are you ready for the challenge?</p>
          <button className="start-button" onClick={onClick}>
            Start Game
          </button>
        </div>
      </>
    );
  }
  
  export default StartGame;
  