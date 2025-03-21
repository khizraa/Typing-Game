import React, { useState, useEffect, useRef } from "react";
import "../styling/GameUI.css"; // Import CSS file

const words = [
  // Programming & Tech
  "developer", "javascript", "react", "frontend", "backend",
  "function", "variable", "debugging", "algorithm", "database",
  "server", "client", "network", "interface", "compiler",
  "execution", "iteration", "recursion", "syntax", "framework",
  "object", "array", "string", "encryption", "optimization",

  // Science & Nature
  "gravity", "molecule", "atom", "chemical", "volcano",
  "tornado", "earthquake", "ocean", "planet", "galaxy",
  "asteroid", "nebula", "oxygen", "evolution", "ecosystem",
  "bacteria", "virus", "climate", "temperature", "photosynthesis",

  // Daily Life & General Words
  "umbrella", "keyboard", "bottle", "garden", "window",
  "pencil", "notebook", "television", "newspaper", "mirror",
  "backpack", "earphones", "guitar", "perfume", "bracelet",
  "calculator", "calendar", "wallet", "airplane", "highway",

  // Emotions & Feelings
  "happiness", "sadness", "anger", "joyful", "fear",
  "excitement", "curiosity", "motivation", "inspiration", "kindness",
  "hopeful", "determined", "shyness", "nervous", "grateful",
  "confident", "courage", "patience", "loneliness", "melancholy",

  // Food & Drinks
  "pizza", "sandwich", "chocolate", "strawberry", "mango",
  "watermelon", "carrot", "broccoli", "cheesecake", "pasta",
  "burger", "fries", "omelette", "lemonade", "coffee",
  "popcorn", "blueberry", "avocado", "coconut", "pancakes",

  // Random & Fun Words
  "zebra", "dolphin", "rainbow", "fireworks", "magnet",
  "adventure", "puzzle", "whisper", "lighthouse", "moonlight",
  "treasure", "midnight", "snowflake", "thunderstorm", "butterfly",
  "parachute", "spaceship", "bicycle", "superhero", "daydream"
];


function GameUI() {
  const [input, setInput] = useState("");
  const [popupMessage, setPopUpMessage] = useState("");
  const [word, setWord] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [timer, setTimer] = useState(10);
  const timerRef = useRef(null);

  useEffect(() => {
    startNewRound();
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clearInterval(timerRef.current);
      setPopUpMessage(input.toLowerCase() === word ? "🎉 You Win!" : "❌ You Lose!");
    }
  }, [timer]);

  function startNewRound() {
    const number = Math.floor(Math.random() * words.length);
    setWord(words[number].toLowerCase());
    setInput("");
    setPopUpMessage("");
    setSubmitted(false);
    setTimer(10);
    
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setTimer(prev => prev - 1), 1000);
  }

  function handleChange(event) {
    setInput(event.target.value);
  }

  function checkResult() {
    clearInterval(timerRef.current);
    setPopUpMessage(input.toLowerCase() === word ? "🎉 You Win!" : "❌ You Lose!");
    setSubmitted(true);
  }

  return (
    <div className="game-container">
      <h1 className="game-title">Word Typing Game</h1>
      <p className="word-display">Type: <strong className="word-highlight">{word}</strong></p>
      <p className="timer">Time left: <strong>{timer}s</strong></p>
      <input type="text" value={input} onChange={handleChange} className="input-box"/>
      <button onClick={checkResult} disabled={submitted} className="submit-btn">Submit</button>

      {popupMessage && (
        <div className="popup">
          <h2>{popupMessage}</h2>
          <button onClick={startNewRound} className="next-btn">Next Word</button>
        </div>
      )}
    </div>
  );
}

export default GameUI;
