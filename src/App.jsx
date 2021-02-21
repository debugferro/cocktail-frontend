import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import thunk from 'redux-thunk';

import Index from './screens/index';
import SignUp from './screens/signup';

import { loggedInReducer, userReducer } from './reducers/login_reducers';

const reducers = combineReducers({
  // key: reducer
  logged_in: loggedInReducer,
  user: userReducer,
});

const initialState = {
  logged_in: false,
  user: '',
};

const middlewares = applyMiddleware(thunk);
const store = createStore(reducers, initialState, middlewares);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
