import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Reducers/CounterSlice'

export const Store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})