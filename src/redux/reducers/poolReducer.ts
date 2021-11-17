import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import { RootState } from "../store";
import { IPoolState } from '../states/PoolState';
import { PoolService } from '../../services/pool.service';

let initialState = [] as IPoolState[];
const poolService = new PoolService();

const todoSlice = createSlice({
  name: 'pools',
  initialState,
  reducers: {
    addPool: {
      reducer: (state, action: PayloadAction<IPoolState>) => {
        state.push(action.payload);             
      },
      prepare: (params: IPoolState) => ({
        payload: {
          id: uuidv4(),
          name: params.name,
          count: params.count,
          isParallel: params.isParallel,
          isStartManually: params.isStartManually,
          dateCreated: new Date().toLocaleString(),
          dateRunStarted: params.dateRunStarted,
          dateRunFinished: params.dateRunFinished,
        } as IPoolState,
      }),
    },
    runPool(state, action: PayloadAction<IPoolState>) {
      const pool = state.find((item) => item.id === action.payload.id);
      if (pool) {
        pool.dateRunStarted = action.payload.dateRunStarted;
        pool.dateRunFinished = action.payload.dateRunFinished;
      }      
    }
  },
});

export const { addPool, runPool } = todoSlice.actions;
export default todoSlice.reducer;

export const thunkRunRequests =
  (params: IPoolState): ThunkAction<void, RootState, unknown, AnyAction> =>
  async dispatch => {
    params.dateRunStarted = new Date().toLocaleString();
    await poolService.runRequests(params.count, params.isParallel);
    params.dateRunFinished = new Date().toLocaleString();
    dispatch(addPool(params));
  }
  
export const thunkRunPool =
  (id: string): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch, getState) => {
    const state = getState();
    const pool = state.find((item) => item.id === id);
    
    if (pool) {
      const dateRunStarted = new Date().toLocaleString();
      await poolService.runRequests(pool.count, pool.isParallel);
      const dateRunFinished = new Date().toLocaleString();
      
      const params = {
        id,
        name: pool.name,
        count: pool.count,
        isParallel: pool.isParallel,
        isStartManually: pool.isStartManually,
        dateRunStarted,
        dateRunFinished,
      };
      dispatch(runPool(params));
    }
  }