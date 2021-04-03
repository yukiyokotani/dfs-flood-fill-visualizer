import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Item = {
  id: string;
  weight: number;
  worth: number;
  isProcessed: boolean;
};

export type Eval = 'BEFORE' | 'INPROCESS' | 'REACHABLE' | 'UNREACHABLE';

export type ConditionState = {
  speed: number;
  eval: Eval;
};

const initialState: ConditionState = {
  speed: 5,
  eval: 'BEFORE',
};

const conditionSlice = createSlice({
  name: 'condiiton',
  initialState,
  reducers: {
    setCapacity: (state, action: PayloadAction<number>) => {
      state.speed = action.payload;
    },
    setEval: (state, action: PayloadAction<Eval>) => {
      state.eval = action.payload;
    },
    clearCondition: () => initialState,
  },
});

export default conditionSlice;
