import React from 'react';
import styles from '../styles/screens/signup.module.css';
import SingUpForm from './components/signup_form';
import Logo from './components/logo';

function SignUp() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <Logo />
        <div className={styles.card}>
          <h1>Sign Up</h1>
          <SingUpForm />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
