import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    user: '',
    email: '',
    id: undefined,
  },
  reducers: {
    setUser(state, action) {

    },
  },
});

export const { setUser } = loginSlice.actions;

export default loginSlice.reducer;
