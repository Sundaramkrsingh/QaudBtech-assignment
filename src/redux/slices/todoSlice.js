import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    title: "",
    dueDate: ""
  },
  reducers: {
    onChangeTitle: (state, action) => {
        state.title = action.payload
    },
    onChangeDuedate: (state, action) => {
        state.dueDate = action.payload
    }
  },
})


export const { onChangeTitle, onChangeDuedate } = todoSlice.actions
export default todoSlice.reducer