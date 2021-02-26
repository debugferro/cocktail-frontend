import React from 'react';
import styles from '../../styles/components/logo.module.css';

import logo from '../../images/logo.svg';

function Logo() {
  return (
    <div className={styles.logoContainer}>
      <img src={logo} alt="Pink Lady Logo"/>
      <span>Pink</span><span>Lady</span>
    </div>
  );
}

export default Logo;
