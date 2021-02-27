import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Index from './screens/index';
import SignUp from './screens/signup';
import Login from './screens/login';
import styles from './styles/screens/signin_signup.module.css';
import Logo from './screens/components/logo';
import TopBar from './screens/components/top_bar';
import TabBar from './screens/components/tab_bar';

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

      <TopBar />
      <Logo />
      <TabBar />
      <div className={styles.container}>
        <Switch>

            <Route exact path="/" component={Index} />
            { authenticated ? '' :
              [
                <Route exact path="/signup" component={SignUp} />,
                <Route exact path="/login" component={Login} />
              ]
            }

        </Switch>
      </div>

      </BrowserRouter>
    </>
  );
}

export default App;
