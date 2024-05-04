import { configureStore } from '@reduxjs/toolkit'
import todoSlice from './slices/todoSlice'
import todoListSlice from './slices/todoListSlice'

const store = configureStore({
  reducer: {
    todo: todoSlice,
    todoList: todoListSlice,
  },
})

export default store