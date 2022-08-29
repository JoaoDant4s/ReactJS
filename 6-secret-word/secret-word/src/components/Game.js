import "./Game.css"
import { useState, useRef } from 'react'
const Game = ({verifyLetter, word, category, letters, guessedLetters, wrongLetters, guesses, score}) => {
  const [letter, setLetter] = useState("")
  const letterInputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault();

    verifyLetter(letter)

    setLetter("")

    letterInputRef.current.focus()
  }
  return (
    <div className="game">
        <p className="points">
          <span>Pontuação: {score}</span>
        </p>
        <h1>Adivinhe a palavra:</h1>
        <h3 className="tip">
          Dica sobre a palavra: <span>{category}</span>
        </h3>
        <p>Restam <span className="trys">{guesses}</span> tentativas</p>
        <div className="wordContainer">
          {letters.map((letter, i) => (
            guessedLetters.includes(letter) ? (
              <span key={i} className="letter">{letter}</span>
            ) : (
              <span key={i} className="blankSquare"></span>
            )
          ))}
        </div>
        <div className="letterContainer">
          <p>Tente adivinhar uma letra da palavra:</p>
          <form onSubmit={handleSubmit}>
            <input type="text" 
              name="letter" 
              maxLength="1" 
              required 
              onChange={(e) => setLetter(e.target.value)} 
              value={letter}
              ref={letterInputRef}
            />
            <button>Palpitar</button>
          </form>
        </div>
        <div className="wrongLettersContainer">
          <p>Letras já utilizadas:</p>
          {guessedLetters.map((guessedLetter, i) => (
            <span key={i}>{guessedLetter}, </span>
          ))}
        </div>
    </div>
  )
}

export default Game