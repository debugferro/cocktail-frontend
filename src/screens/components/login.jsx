import React from 'react';

import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

function Login() {
  const { register, handleSubmit, errors } = useForm();
  const { dispatch } = useDispatch;

  function onSubmit(data) {
    dispatch()
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">
          Username
          <input type="text" name="username" id="username" required ref={register()} />
        </label>
        <label htmlFor="password">
          Password
          <input type="password" name="password" id="password" required ref={register()} />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
