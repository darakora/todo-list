import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import todoSlice from "./Redusers/todoSlice";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['todoData']
};

const rootReducer = combineReducers({
  todoData: todoSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  })
});

export default store;