import React from 'react';
import { useSelector } from 'react-redux';

function RecommendedCocktails() {
  const username = useSelector((state) => state.username);

  return (
    <>
      <h1>Welcome {username}</h1>
    </>
  );
}

export default RecommendedCocktails;
