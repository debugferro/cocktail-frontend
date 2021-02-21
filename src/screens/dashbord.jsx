import React from 'react';
import { useSelector } from 'react-redux';

function Dashbord() {
  const username = useSelector((state) => state.username);
  return (
    <div>
      <h1>Welcome {username}</h1>
    </div>
  );
}

export default Dashbord;
