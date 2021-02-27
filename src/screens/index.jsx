import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

//Components
import RecommendedCocktails from './components/recommended_cocktails';

// Actions && Requests
import fetchIndex from '../requests/fetch_index';

function Index() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIndex());
  }, []);

  return (
    <div>
      <RecommendedCocktails />
      <Link to="/login">Sign-in</Link>
      <Link to="/signup">Sign-up</Link>
    </div>
  );
}

export default Index;
