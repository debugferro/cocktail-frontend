import { configureStore, combineReducers } from '@reduxjs/toolkit';
import loginSlice from '../actions/loginSlice';

const reducer = combineReducers({
  login: loginSlice,
});

const store = configureStore({
  reducer,
});
