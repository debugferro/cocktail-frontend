import { createSlice } from '@reduxjs/toolkit';
import requestAuthentication from '../requests/authentication';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: undefined,
    email: undefined,
    id: undefined,
    authenticated: false,
    requestStatus: 'idle',
    errors: [],
  },
  reducers: {},
  extraReducers: {
    [requestAuthentication.pending]:
    (state) => ({ ...state, requestStatus: 'pending' }),
    [requestAuthentication.fulfilled]:
    (state, { payload }) => ({ ...state, ...payload, requestStatus: 'idle' }),
    [requestAuthentication.rejected]: (state, action) => {
      // Dealing errors. If no payload is informed, then a message will be at least.
      const fullState = { ...state, requestStatus: 'rejected' };
      if (action.payload) {
        return { ...fullState, ...action.payload };
      }
      return { ...fullState, errors: [action.error.message] };
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
