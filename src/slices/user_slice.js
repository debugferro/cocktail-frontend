import { createSlice } from '@reduxjs/toolkit';
import requestAuthentication from '../requests/authentication';
import unAuthenticate from '../requests/un_authenticate';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    entity: {
      username: undefined,
      email: undefined,
      id: undefined,
      isAuthenticated: false,
    },
    requestStatus: 'idle',
    errors: [],
    presentRequestId: undefined,
  },
  reducers: {
    authenticate(state, action) {
      state.entity = { ...action.payload }
    }
  },
  extraReducers: {
    [requestAuthentication.pending]: (state, action) => {
      if (state.requestStatus === 'idle') {
        state.requestStatus = 'pending';
        state.presentRequestId = action.meta.requestId;
      };
    },
    [requestAuthentication.fulfilled]: (state, action) => {
      const { requestId } = action.meta;
      const { payload } = action;
      if (state.requestStatus === 'pending' && state.presentRequestId === requestId) {
        state.requestStatus = 'idle';
        state.entity = { ...payload };
        state.presentRequestId = undefined;
      }
      // ...state, ...payload, requestStatus: 'idle'
    },
    [requestAuthentication.rejected]: (state, action) => {
      // Dealing errors. If no payload is informed, then a message will be at least.
      const { requestId } = action.meta;
      if (state.requestStatus === 'pending' && state.presentRequestId === requestId) {
        state.requestStatus = 'idle';
        if (action.payload) {
          state.errors = action.payload.errors;
        } else {
          state.errors = action.error.message;
        }
      }
    },
    [unAuthenticate.pending]: (state, action) => {
      if (state.requestStatus === 'idle') {
        state.requestStatus = 'pending';
        state.presentRequestId = action.meta.requestId;
      };
    },
    [unAuthenticate.fulfilled]: (state, action) => {
      const { requestId } = action.meta;
      if (state.requestStatus === 'pending' && state.presentRequestId === requestId) {
        state.requestStatus = 'idle';
        state.entity = {}; state.presentRequestId = undefined;
      }
    },
    [unAuthenticate.rejected]: (state, action) => {
      const { requestId } = action.meta;
      if (state.requestStatus === 'pending' && state.presentRequestId === requestId) {
        state.requestStatus = 'idle';
        if (action.error) { state.errors = action.error.message }
      }
    }
  },
});

export const { authenticate } = userSlice.actions;

export default userSlice.reducer;
