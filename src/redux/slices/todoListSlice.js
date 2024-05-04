import { createSlice } from "@reduxjs/toolkit"

var initialState = {
    todos: [],
    nextTodoId: 1
}

export const todoListSlice = createSlice({
    name: "todoList",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: state.nextTodoId++,
                title: action.payload.title,
                dueDate: action.payload.dueDate,
                completed: false      
            }
            state.todos.unshift(newTodo) // adding new todo at top of array
            localStorage.setItem("todos", JSON.stringify(state)) // setting upated list to localStorage
        },
        markDone: (state, action) => {
            const id = action.payload
            const index = state.todos.findIndex(todo => todo.id === id)
            if (index !== -1) {
                const completedTodo = state.todos.splice(index, 1)[0]
                completedTodo.completed = true
                state.todos.push(completedTodo)      // adding completed todo at the end
                localStorage.setItem("todos", JSON.stringify(state))
            }
        },
        addAgain: (state, action) => {
            const id = action.payload
            const index = state.todos.findIndex(todo => todo.id === id)
            if (index !== -1) {
                const addAgainTodo = state.todos.splice(index, 1)[0]
                addAgainTodo.completed = false
                state.todos.unshift(addAgainTodo)      // adding completed todo at the end
                localStorage.setItem("todos", JSON.stringify(state))
            }
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
            localStorage.setItem("todos", JSON.stringify(state));
        },
        fetchTodos: (state) => {
            const fetchedState = JSON.parse(localStorage.getItem("todos")) || initialState
            state.todos = fetchedState.todos
            state.nextTodoId = fetchedState.nextTodoId
        }
    }
})


export const { addTodo, markDone, addAgain, deleteTodo, fetchTodos } = todoListSlice.actions
export default todoListSlice.reducer