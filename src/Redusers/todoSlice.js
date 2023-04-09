import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';

export const todoSlice = createSlice({
    name: "todoData",
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            const newTask = {
                id: nanoid(),
                title: action.payload.title,
                completed: false
            }
            state.push(newTask);
        },
        deleteTodo: (state, action) => {
            return state.filter((item) => item.id !== action.payload.id)
        },
        doneTask: (state, action) => {
            const indx = state.findIndex((item) => item.id === action.payload.id);
            state[indx].completed = action.payload.completed;
        }
    }
})

export const { addTask, deleteTodo, doneTask } = todoSlice.actions;
export default todoSlice.reducer;