import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Status = {
  type: number;
  isInProcess: boolean;
  isProcessed: boolean;
};

export type Coordiante = {
  i: number;
  j: number;
};

const initialSquare: Status = {
  type: 0,
  isInProcess: false,
  isProcessed: false,
};

const initialState: {
  table: Status[][];
  home?: Coordiante;
  shop?: Coordiante;
} = {
  home: { i: 0, j: 0 },
  table: Array(10)
    .fill(0)
    .map((_, i) => {
      if (i === 0) {
        return Array(10)
          .fill(0)
          .map((__, j) => {
            if (j === 0) {
              return {
                type: 3,
                isInProcess: false,
                isProcessed: false,
              };
            }
            return initialSquare;
          });
      }
      return Array(10).fill(initialSquare);
    }),
};

const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    switchType: (state, action: PayloadAction<{ i: number; j: number }>) => {
      const newType =
        (state.table[action.payload.i][action.payload.j].type + 1) % 4;
      state.table[action.payload.i][action.payload.j].type = newType;
      if (newType === 2) {
        if (state.shop) {
          state.table[state.shop.i][state.shop.j].type = 0;
        }
        state.shop = action.payload;
      }
      if (newType === 3) {
        // 2のときに一回shopになるので、その場合shopをリセット
        if (
          state.shop?.i === action.payload.i &&
          state.shop?.j === action.payload.j
        ) {
          state.shop = undefined;
        }
        if (state.home) {
          state.table[state.home.i][state.home.j].type = 0;
        }
        state.home = action.payload;
      }
    },
    setInProcess: (
      state,
      action: PayloadAction<{ i: number; j: number; isInProcess: boolean }>
    ) => {
      state.table[action.payload.i][action.payload.j].isInProcess =
        action.payload.isInProcess;
    },
    setProcessed: (
      state,
      action: PayloadAction<{ i: number; j: number; isProcessed: boolean }>
    ) => {
      state.table[action.payload.i][action.payload.j].isProcessed =
        action.payload.isProcessed;
    },
    setTable: (state, action: PayloadAction<Status[][]>) => {
      state.table = action.payload;
    },
    resetProcess: (state) => {
      state.table.forEach((row) => {
        row.forEach((item) => {
          item.isInProcess = false;
          item.isProcessed = false;
        });
      });
    },
    resetTable: () => initialState,
  },
});

export default tableSlice;
