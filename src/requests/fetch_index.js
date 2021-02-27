import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import config from './config';

// Fetch Index Cocktails

const fetchIndex = createAsyncThunk(
  'cocktails/fetchIndex',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${config.url}/cocktails`, { withCredentials: true });

      return response.data.cocktails;
    } catch (err) {
      if (!err.response) throw err; // No response message from backend (probably network failure)
      return rejectWithValue(err.response.data); // Any other type of error
    }
  },
);

export default fetchIndex;
