import LetterGrid from "./LetterGrid";
import ButtonGrid from "./ButtonGrid";
import { useState } from "react";

export default function GameBoard({ secretWord, maxErrors, isShown }) {

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [errorCount, setErrorCount] = useState(0);

  const letterGuessedHandler = (letter) => {
    let val = letter.toLowerCase(); // 소문자화
    setGuessedLetters([...guessedLetters, val]);

    if (!secretWord.toLowerCase().includes(val)) {
      setErrorCount(errorCount + 1);
    }
  } 

  return (
    <div className={isShown || 'hidden'}>
      <div>
        남은 획수 : {maxErrors - errorCount}
      </div>
      <LetterGrid 
        secretWord={secretWord} 
        guessedLetters={guessedLetters}
      />
      <ButtonGrid 
        letterGuessed={letterGuessedHandler}
        isShown={errorCount < maxErrors}
      />
    </div>
  );
}