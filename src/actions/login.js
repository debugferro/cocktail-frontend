import axios from 'axios';

export default function login(data) {
  const user = {
    email: data.username,
    password: data.password,
  };
  return async (dispatch) => {
    axios.post('http://localhost:3001/api/v1/login', { user }, { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in) {
          dispatch({ type: 'SET_USER', payload: response.data });
          dispatch({ type: 'SET_LOGGED_IN' });
          console.log(response.data)
        } else {
          console.log('login failed');
        }
      }).catch((error) => console.log('api errors:', error));
  };
}
