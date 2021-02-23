import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// export default function login(data) {
//   const user = {
//     email: data.username,
//     password: data.password,
//   };
//   return async function fetch(dispatch) {
//     const response = await axios.post('http://localhost:3001/api/v1/login', { user }, { withCredentials: true })
//       if (response.data.logged_in) {
//         dispatch({ type: 'SET_USER', payload: response.data });
//         dispatch({ type: 'SET_LOGGED_IN' });
//         console.log(response.data);
//       } else {
//         console.log('login failed');
//       }
//     // .catch((error) => console.log('api errors:', error));
//     return response.data;
//   };
// }

const requestAuthentication = createAsyncThunk(
  'user/authLogin',
  async (data, { rejectWithValue }) => {
    const user = {
      email: data.username,
      password: data.password,
    };
    // const response = await axios.post('http://localhost:3001/api/v1/login', { user }, { withCredentials: true });
    // return response.data;
    try {
      const response = await axios.post('http://localhost:3001/api/v1/login', { user }, { withCredentials: true });
      return response.data;
    } catch (err) {
      const error = err;
      console.log(error);
      if (!error.response) {
        console.log('Ill thrown an error')
        throw err;
      }
      //console.log(error.response.data);
      console.log('Ill send error.response.data')
      return rejectWithValue(error.response.data);
    }
  },
);

export default requestAuthentication;
