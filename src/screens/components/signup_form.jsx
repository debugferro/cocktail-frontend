import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import requestSignUp from '../../requests/signup';
import authenticate from '../../actions/authenticate';

toast.configure();

const validationSchema = yup.object().shape({
  email: yup.string()
    .email('E-mail address format is invalid')
    .required('E-mail address is required'),
  username: yup.string().min(3).max(20).required('Username is required'),
  password: yup.string().required('Password is required!').min(8).max(20),
  password_confirmation: yup.string()
    .oneOf([yup.ref('password'), null], 'Password must match'),
});

export default function SingUpForm() {
  const { register, handleSubmit, errors } = useForm({ mode: 'onChange', resolver: yupResolver(validationSchema) });
  const dispatch = useDispatch();
  const apiErrors = useSelector((state) => state.signup.errors);
  const history = useHistory();

  useEffect(() => {
    if(apiErrors && apiErrors.length) {
      apiErrors.forEach((error) => {
        toast.error(error, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
    }
  }, [apiErrors]);

  const onSubmit = async (data) => {
    console.log('starting...')
    const response = await dispatch(requestSignUp(data));
    console.log(response);
    if (response.payload && response.payload.isAuthenticated) {
      dispatch(authenticate(response.payload));
      history.push('/');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">E-mail</label>
        <input type="text" name="email" id="email" ref={register()} />
        {errors.email && <p>{errors.email.message}</p>}
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" ref={register()} />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" ref={register()} />
        {errors.password && <p>{errors.password.message}</p>}
        <label htmlFor="password_confirmation">Password Confirmation</label>
        <input type="password" name="password_confirmation" id="password_confirmation" ref={register()} />
        {errors.passwordConfirmation && <p>{errors.passwordConfirmation.message}</p>}
        <input type="submit" />
      </form>
    </div>
  );
}
