import { configureStore } from '@reduxjs/toolkit';
import todoSlice from "./Redusers/todoSlice";

export default configureStore({
  reducer: {
      todoData: todoSlice,
  }
})