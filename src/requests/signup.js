import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import config from './config';

// Authentication API call for login

const requestSignup = createAsyncThunk(
  'user/authLogin',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${config.url}/signup`, { withCredentials: true });
      return response.data.user;
    } catch (err) {
      if (!err.response) throw err; // No response message from backend (probably network failure)
      return rejectWithValue(err.response.data); // Any other type of error
    }
  },
);

export default requestSignup;
