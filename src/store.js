import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userSlice from './slices/user_slice';
import signUpSlice from './slices/signup_slice';
import cocktailsSLice from './slices/cocktails_slice';

const reducer = combineReducers({
  user: userSlice,
  signup: signUpSlice,
  cocktails: cocktailsSLice,
});

const store = configureStore({
  reducer,
});

export default store;
