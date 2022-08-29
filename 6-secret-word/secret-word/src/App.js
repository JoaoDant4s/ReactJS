import './App.css';
import { useCallback, useEffect, useState } from 'react';

import StartScreen from './components/StartScreen';

import { wordsList} from './data/words'
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"}
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)
  const [word, setWord] = useState("")
  const [letters, setLetters] = useState([])

  const [category, setCategory] = useState("")
  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(5)
  const [score, setScore] = useState(0)

  const initializeGame = useCallback(() => {
    const categories = Object.keys(words)

    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return {word, category}
  }, [words])

  const startGame = useCallback(() => {
    
    clearLetterStates()

    const {word, category} = initializeGame()

    let wordLetters = word.split("")

    wordLetters = wordLetters.map((l) => l.toLowerCase())

    setWord(word)
    setCategory(category)
    setLetters(wordLetters)
    setGameStage(stages[1].name)
  }, [initializeGame])
  
  const verifyLetter = (letter) => {

    const normalizedLetter = letter.toLowerCase()
    if(guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)){
      return;
    }

    if(letters.includes(normalizedLetter)){
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter
      ])
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter
      ])
      setGuesses((actualGuesses) => actualGuesses - 1)
    }
  }
  
  const clearLetterStates = () => {
    setGuessedLetters([])
    setWrongLetters([])
  }

  useEffect(() => {
    if(guesses <= 0){
      clearLetterStates()
      setGameStage(stages[2].name)
    }
  }, [guesses])

  useEffect(() => {
    const uniqueLetters = [...new Set(letters)]

    if(guessedLetters.length === uniqueLetters.length){
      setScore((actualScore) => actualScore += 100)
      setGuesses(5)
      startGame()
    }
  }, [guessedLetters, letters, startGame])

  const retry = () => {
    //reset all states
    setGuesses(5)
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame}/>}
      {gameStage === 'game' && (
        <Game 
          verifyLetter={verifyLetter}
          word={word}
          category={category}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === 'end' && <GameOver retry={retry} score={score}/>}
    </div>
  );
}

export default App;
