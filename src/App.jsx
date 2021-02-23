import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import thunk from 'redux-thunk';

import Index from './screens/index';
import SignUp from './screens/signup';

import { authenticationReducer, userReducer } from './reducers/login_reducers';

const reducers = combineReducers({
  // key: reducer
  authenticated: authenticationReducer,
  user: userReducer,
});

const initialState = {
  authenticated: false,
  user: '',
};


const store = createStore(reducers, initialState);

function App() {
  useEffect(() => {

}, []);

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
