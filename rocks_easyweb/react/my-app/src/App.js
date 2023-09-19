import { useState } from 'react';
import './App.css';
import GameBoard from './GameBoard';
import WordSelect from './WordSelect';

export default function App() {

  const [secretWord, setSecretWord] = useState('');

  return (
    <div className='container'>
      <h1>Welcome to Hangman!</h1>
      <p>Do you want to play game?</p>
      <div>
        <WordSelect 
          wordSelected={val => setSecretWord(val)}
          isShown={!secretWord}
        />
        <GameBoard 
          secretWord={secretWord}
          maxErrors={6}
          isShown={secretWord}
        />
      </div>
    </div>
  );
}