import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const data = {
                id: nanoid(),
                text: action.payload
            }

            state.todos.push(data)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }

    }
})
export const { addTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer;