import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userSlice from './slices/user_slice';
import signUpSlice from './slices/sign_up_slice';

const reducer = combineReducers({
  user: userSlice,
  signup: signUpSlice,
});

const store = configureStore({
  reducer,
});

export default store;
