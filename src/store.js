import { configureStore } from '@reduxjs/toolkit';
import taskSlice from "./Redusers/taskSlice";

export default configureStore({
  reducer: {
    taskSlice,
  }
})