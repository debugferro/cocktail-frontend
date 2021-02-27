import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// Screens
import Index from './screens/index';
import SignUp from './screens/signup';
import Login from './screens/login';
import LogOut from './screens/logout';
import New from './screens/cocktails/new';
// Components
import TopBar from './screens/components/top_bar';
import TabBar from './screens/components/tab_bar';
import Logo from './screens/components/logo';
// Stylesheet
import styles from './styles/screens/form_page.module.css';

// Actions && Requests
import checkAuthentication from './requests/check_authentication';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthentication()); // Checking if user is logged-in
  }, []);

  const isAuthenticated = useSelector((state) => state.user.entity.isAuthenticated);
  return (
    <>
      <BrowserRouter>
        <TopBar />
        <Logo />
        <TabBar />
        <div className={styles.container}>
          <Switch>
            <Route exact path="/" component={Index} />
            {isAuthenticated ?
              [
                <Route exact path="/logout" component={LogOut} />,
                <Route exact path="/cocktails/new" component={New} />
              ]
              :
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
