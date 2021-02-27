import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

//Components
import NewCocktailForm from '../components/new_cocktail_form';

import styles from '../../styles/screens/form_page.module.css';

function New() {
  const isAuthenticated = useSelector((state) => state.user.entity.isAuthenticated);
  const dispatch = useDispatch();

  return (

      <div className={styles.background}>
        <div className={styles.container}>
          <div className={styles.card}>
            <h1>New Cocktail</h1>
            { isAuthenticated &&
              <NewCocktailForm /> }
          </div>
        </div>
      </div>
  );
}

export default New;
