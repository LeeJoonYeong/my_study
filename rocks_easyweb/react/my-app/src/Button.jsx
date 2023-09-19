import { useState } from "react";

export default function Button({ value, onClick }) {

  const [isCilicked, setIsClicked] = useState(false); // 클릭 on/off

  let className = 'button';

  // 클릭을 했다면 클래스 추가
  if(isCilicked) {
    className += ' guessed';
  }

  function clickHandler() {
    setIsClicked(true);
    onClick(value);
  }

  return (
    <button 
      className={className}
      onClick={clickHandler}
    >
      {value}
    </button>
  );
}