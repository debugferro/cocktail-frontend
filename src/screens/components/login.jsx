import React, { useCallback } from 'react';

import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';

import login from '../../actions/login';

function Login({ login }) {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    login(data);
  };

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

const mapDispatchToProps = { login: (data) => login(data) };

export default connect(null, mapDispatchToProps)(Login);
