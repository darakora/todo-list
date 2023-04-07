import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        
    }
})

export const { addTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;