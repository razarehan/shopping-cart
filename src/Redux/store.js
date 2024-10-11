import { configureStore } from '@reduxjs/toolkit'
import CartReducer from './Cart/cartSlice';

export const store = configureStore({
  reducer: {
    cart: CartReducer
  },
})