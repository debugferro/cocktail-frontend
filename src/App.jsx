import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Index from './screens/index';
import SignUp from './screens/signup';
import Login from './screens/login';

import checkAuthentication from './requests/check_authentication';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthentication());
  }, []);

  const authenticated = useSelector((state) => state.user.entity.isAuthenticated);
  return (
    <>
      <BrowserRouter>
        <Switch>

            <Route exact path="/" component={Index} />
            { authenticated ? '' :
              [
                <Route exact path="/signup" component={SignUp} />,
                <Route exact path="/login" component={Login} />
              ]
            }

        </Switch>

      </BrowserRouter>
    </>
  );
}

export default App;
