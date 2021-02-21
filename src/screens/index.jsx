import React from 'react';
import { useSelector } from 'react-redux';
import Login from './components/login';
import DashBord from './dashbord';

function Index() {
  const loggedIn = useSelector((state) => state.logged_in);
  return (
    <div>
      <h1>Cocktails!</h1>
      { !loggedIn &&
        <Login />
      }
      { loggedIn &&
        <DashBord />
      }
    </div>
  );
}

export default Index;
