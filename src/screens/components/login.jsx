import React, { useCallback } from 'react';

import { useForm } from 'react-hook-form';
import { connect, useDispatch, useSelector } from 'react-redux';

// import login from '../../actions/login';
import requestAuthentication from '../../requests/authentication';

export default function Login() {
  const { register, handleSubmit, errors } = useForm();
  const authenticated = useSelector((state) => state);
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    // const result = await login(data);
    // if (result.logged_in) {
    //   console.log('congratulations');
    // }
    dispatch(requestAuthentication(data));
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

// const mapDispatchToProps = { login: (data) => login(data) };

// export default connect(null, mapDispatchToProps)(Login);
