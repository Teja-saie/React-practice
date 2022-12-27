import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Reducers/CounterSlice'
import TodoSlice from './Reducers/TodoSlice'

export const Store = configureStore({
  reducer: {
    todos:TodoSlice,
    counter: counterReducer,
  },
})