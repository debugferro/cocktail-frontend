import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import thunk from 'redux-thunk';

import Index from './components/index';
import SignUp from './components/signup';

const reducers = combineReducers({
  // key: reducer
});

const initialState = {

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
