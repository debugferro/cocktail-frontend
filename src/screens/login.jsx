import React from 'react';
import LoginForm from './components/login_form';

import styles from '../styles/screens/signin_signup.module.css';
import Logo from './components/logo';

function Login() {
  return (
    <>
      <div className={styles.background}>
        <div className={styles.container}>
          <Logo />
          <div className={styles.card}>
            <h1>Sign In</h1>
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
