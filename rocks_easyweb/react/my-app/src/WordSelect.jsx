import { useState } from "react";

export default function WordSelect({ wordSelected, isShown }) {

  const [secretWord, setSecretWord] = useState('');

  return (
    <div className={isShown ? '' : 'hidden'}>
      <input 
        type="text" 
        onChange={e => setSecretWord(e.target.value)}
        value={secretWord}
      />
      <button
        onClick={e => wordSelected(secretWord)}
      >Set Word</button>
    </div>
  );
}