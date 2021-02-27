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
  name: yup.string()
    .required('Cocktail needs a name')
    .min(5, 'Name needs at least 5 characters')
    .max(25, 'Name characters limit is 255'),
  description: yup.string()
    .required('Cocktail needs a description')
    .min(5, 'Description needs at least 5 characters')
    .max(255, 'Description character limit is 255'),
});

export default function NewCocktailForm() {
  const { register, handleSubmit, errors } = useForm({ mode: 'onChange', resolver: yupResolver(validationSchema) });
  const dispatch = useDispatch();
  const apiErrors = useSelector((state) => state.signup.errors);
  const history = useHistory();

  useEffect(() => {
    if (apiErrors && apiErrors.length) {
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
          <input required noValidate type="text" name="name" id="name" ref={register()} />
          <label htmlFor="name">Name</label>
          <div className={`${styles.formWarning} ${errors.name ? styles.error : ''}`}>
            {errors.name && <span>{errors.name.message}</span>}
          </div>
        </div>
        <div>
          <textarea required noValidate type="text" name="description" id="description" ref={register()} />
          <label htmlFor="description">Description</label>
          <div className={`${styles.formWarning} ${errors.description ? styles.error : ''}`}>
            {errors.description && <span>{errors.description.message}</span>}
          </div>
        </div>
        <input className={styles.formSubmit} type="submit" value="Sign Up" />
      </form>
    </>
  );
}
