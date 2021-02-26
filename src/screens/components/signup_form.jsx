import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from '../../styles/components/signin_signup_form.module.css';

import requestSignUp from '../../requests/signup';
import authenticate from '../../actions/authenticate';

toast.configure();

const validationSchema = yup.object().shape({
  email: yup.string()
    .email('E-mail address format is invalid')
    .required('E-mail address is required'),
  username: yup.string().min(3).max(20).required('Username is required'),
  password: yup.string().required('Password is required!').min(8).max(20),
  password_confirmation: yup.string().required('Password confirmation is required')
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
    <>
      <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input required noValidate type="text" name="email" id="email" ref={register()} />
          <label htmlFor="email">E-mail</label>
          <div className={`${styles.formWarning} ${errors.email ? styles.error : ''}`}>
            {errors.email && <span>{errors.email.message}</span>}
          </div>
        </div>
        <div>
          <input required noValidate type="text" name="username" id="username" ref={register()} />
          <label htmlFor="username">Username</label>
          <div className={`${styles.formWarning} ${errors.username ? styles.error : ''}`}>
            {errors.username && <span>{errors.username.message}</span>}
          </div>
        </div>
        <div>
          <input required noValidate type="password" name="password" id="password" ref={register()} />
          <label htmlFor="password">Password</label>
          <div className={`${styles.formWarning} ${errors.password ? styles.error : ''}`}>
            {errors.password && <span>{errors.password.message}</span>}
          </div>
        </div>
        <div>
          <input required noValidate type="password" name="password_confirmation" id="password_confirmation" ref={register()} />
          <label htmlFor="password_confirmation">Password Confirmation</label>
          <div className={`${styles.formWarning} ${errors.password_confirmation ? styles.error : ''}`}>
          {errors.password_confirmation && <span>{errors.password_confirmation.message}</span>}
          </div>
        </div>
        <input className={styles.formSubmit} type="submit" value="Sign Up" />
      </form>
    </>
  );
}
