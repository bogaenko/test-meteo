import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import poolReducer from '../reducers/poolReducer';

export const store = configureStore({
  reducer: poolReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger]
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;