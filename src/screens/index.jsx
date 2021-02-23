import React from 'react';
import { useSelector } from 'react-redux';
import Login from './components/login';
import DashBord from './dashbord';

function Index() {
  const authenticated = useSelector((state) => state.authenticated);
  return (
    <div>
      <h1>Cocktails!</h1>
      { !authenticated &&
        <Login />
      }
      { authenticated &&
        <DashBord />
      }
    </div>
  );
}

export default Index;