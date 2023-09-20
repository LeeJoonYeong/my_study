import { useSelector } from 'react-redux';

export default function DisplayNumber() {

  const size = useSelector((state) => state.size.number);

  return (
    <div>
      <h2>DisplayNumber</h2>
      <input type='text' value={size} readOnly></input>
    </div>
  )
}