import { configureStore } from '@reduxjs/toolkit';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { logger } from 'redux-logger';
import poolReducer from '../reducers/poolReducer';

export const store = configureStore({
  reducer: poolReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger, thunk as ThunkMiddleware]
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;