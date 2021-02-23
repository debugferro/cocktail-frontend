import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import thunk from 'redux-thunk';import { useDispatch } from 'react-redux';

import Index from './screens/index';
import SignUp from './screens/signup';

import store from './store';
// import { authenticationReducer, userReducer } from './reducers/login_reducers';

// const reducers = combineReducers({
//   // key: reducer
//   authenticated: authenticationReducer,
//   user: userReducer,
// });

// const store = createStore(reducers, initialState);

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
