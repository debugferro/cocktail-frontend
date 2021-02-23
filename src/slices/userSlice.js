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
  reducers: {
    // setUser(state, action) {
    //   return { ...state, user: action.usernama, email: action.email, id: action.id };
    // },
  },
  extraReducers: {
    [requestAuthentication.pending]: (state) => {
      return { ...state, requestStatus: 'pending' };
    },
    [requestAuthentication.fulfilled]: (state, action) => {
      const data = action.payload;
      return { ...state, ...data, requestStatus: 'idle' };
    },
    [requestAuthentication.rejected]: (state, action) => {
      console.log(action)
      return { ...state, errors: action.payload, requestStatus: 'error' };
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
