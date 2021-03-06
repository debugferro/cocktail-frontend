import React from 'react';

import styles from '../styles/screens/form_page.module.css';
import SingUpForm from './components/signup_form';

function SignUp() {
  return (
    <>
      <div className={styles.background}>
        <div className={styles.closeBtn}>
          <span>X</span>
        </div>
        <div className={styles.card}>
          <h1>Sign Up</h1>
          <SingUpForm />
        </div>
      </div>
    </>
  );
}

export default SignUp;
