import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../../styles/components/tab_bar.module.css';

import home from '../../images/home.svg';
import search from '../../images/search.svg';
import login from '../../images/login.svg';

function TabBar() {

  let location = useLocation();
  // useEffect(() => {
  //   console.log(location);
  // }, [location]);

  return (
    <div className={styles.tabBar}>
      <Link to="/search" className={`${styles.tab} ${location.pathname === '/search' ? styles.active : ''}`}>
        <span className={styles.icon}>
          <img src={search} alt="" />
        </span>
      </Link>
      <Link to="/" className={`${styles.tab} ${location.pathname === '/' ? styles.active : ''}`}>
        <span className={styles.icon}>
          <img src={home} alt="" />
        </span>
      </Link>
      <Link to="/login" className={`${styles.tab} ${location.pathname === '/login' ? styles.active : ''}`}>
        <span className={styles.icon}>
          <img src={login} alt=""/>
        </span>
      </Link>
    </div>
  );
}

export default TabBar;
