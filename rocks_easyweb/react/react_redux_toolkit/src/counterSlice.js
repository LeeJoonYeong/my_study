import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  number: 0,
};

export const counterSlice = createSlice({
  name: 'AddNumber',
  initialState,
  reducers: {
    increment: (state) => {
      state.number += 1;
    },
    decrement: (state) => {
      state.number -= 1;
    },
    incrementByAmount: (state, action) => {
      console.log('state: ', state.number); // 이전 상태 값
      console.log('action.payload: ', action.payload); // 들어온 값
      state.number += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;