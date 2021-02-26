import React from 'react';
import styles from '../styles/screens/signup.module.css';
import SingUpForm from './components/signup_form';

function SignUp() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>SignUp</h1>
        <SingUpForm />
      </div>
    </div>
  );
}

export default SignUp;
