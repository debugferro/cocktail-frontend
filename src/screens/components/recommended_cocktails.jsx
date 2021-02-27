import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

function RecommendedCocktails() {
  const username = useSelector((state) => state.user.entity.username);
  const cocktails = useSelector((state) => state.cocktails.entities.recommended);

  // useEffect(() => {

  // }, [cocktails]);

  return (
    <>
      { cocktails && cocktails.map((cocktail) => (
        <p key={cocktail.id}>{cocktail.name}</p>
        ))
      }
      <h1>Welcome {username}</h1>
    </>
  );
}

export default RecommendedCocktails;
