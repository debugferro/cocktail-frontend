import React from 'react';
import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
import DashBord from './dashbord';

import Logo from './components/logo';

function Index() {
  return (
    <div>
      <DashBord />
      <Link to="/login">Sign-in</Link>
      <Link to="/signup">Sign-up</Link>
    </div>
  );
}

export default Index;
