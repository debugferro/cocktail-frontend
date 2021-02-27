import React from 'react';
import LoginForm from './components/login_form';

import styles from '../styles/screens/form_page.module.css';

function Login() {
  return (
    <>
      <div className={styles.background}>
        <div className={styles.container}>
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
