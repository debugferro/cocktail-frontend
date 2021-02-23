import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Login from './components/login';
import DashBord from './dashbord';
import LoadSpinner from './components/load_spinner';
import checkAuthentication from '../requests/check_authentication';

function Index() {
  const authenticated = useSelector((state) => state.user.authenticated);
  const status = useSelector((state) => state.user.requestStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuthentication());
  }, []);
  return (
    <div>
      { status === 'pending' ? <LoadSpinner /> : undefined}
      <h1>Cocktails!</h1>
      { authenticated ? <DashBord /> : <Login />}
    </div>
  );
}

export default Index;
