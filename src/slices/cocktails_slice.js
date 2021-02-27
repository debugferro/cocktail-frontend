import { createSlice } from '@reduxjs/toolkit';
import fetchIndex from '../requests/fetch_index';

const cocktailsSLice = createSlice({
  name: 'cocktails',
  initialState: {
    entities: {},
    requestStatus: 'idle',
    errors: [],
    presentRequestId: undefined,
  },
  reducers: {},
  extraReducers: {
    [fetchIndex.pending]: (state, action) => {
      if (state.requestStatus === 'idle') {
        state.requestStatus = 'pending';
        state.errors = [];
        state.presentRequestId = action.meta.requestId;
      };
    },
    [fetchIndex.fulfilled]: (state, action) => {
      const { requestId } = action.meta;
      const { payload } = action;
      if (state.requestStatus === 'pending' && state.presentRequestId === requestId) {
        state.requestStatus = 'idle';
        state.presentRequestId = undefined;
        state.entities = { ...payload };
      }
    },
    [fetchIndex.rejected]: (state, action) => {
      // Dealing errors. If no payload is informed, then a message will be at least.
      const { requestId } = action.meta;
      if (state.requestStatus === 'pending' && state.presentRequestId === requestId) {
        state.requestStatus = 'idle';
        if (action.error) {
          state.errors = action.error.message;
        }
      }
      state.presentRequestId = undefined;
    },
  },
});

// export const { setUser } = signUpSlice.actions;

export default cocktailsSLice.reducer;
