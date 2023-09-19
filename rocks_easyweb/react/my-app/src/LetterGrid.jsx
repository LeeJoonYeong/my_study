import Letter from "./Letter";

export default function LetterGrid({ secretWord, guessedLetters }) {

  let letters = secretWord.split('').map((letter, index) => {
    let isShown = guessedLetters.indexOf(letter.toLowerCase()) > -1;
    return (
      <Letter 
        key={index}
        value={letter}
        isShown={isShown}
      />
    );
  });

  return (
    <div className="flex">
      {letters}
    </div>
  );
}