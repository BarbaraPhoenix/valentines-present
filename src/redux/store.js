import { configureStore } from '@reduxjs/toolkit';
import presents from './presentsSlice';
import cart from './cartSlice';

export const store = configureStore({
    reducer: {
      presents,
      cart
    },
  })