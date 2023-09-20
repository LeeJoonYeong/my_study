import { useSelector, useDispatch } from 'react-redux';
import { increment, incrementByAmount } from '../counterSlice';
import { useState } from 'react';

export default function AddNumber() {

  const [size, setSize] = useState(0);
  // const size = useSelector((state) => state.size.number);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>AddNumber</h2>
      <input 
        type='button' 
        value="+"
        onClick={() => dispatch(incrementByAmount(size))}
      />
      <input 
        type='text' 
        value={size}
        onChange={(e) => setSize(parseInt(e.target.value))}
      />
    </div>
  );
}