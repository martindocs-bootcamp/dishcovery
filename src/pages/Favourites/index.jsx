import React, { useState, useEffect } from "react";

const Favorites = () => {
  // State to hold the favorite meals
  const [favoriteMeals, setFavoriteMeals] = useState([]);

  // Function to fetch favorite meals from local storage
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavoriteMeals(favorites);
  }, []);

  // Function to remove a meal from favorites
  const removeFromFavorites = (mealId) => {
    const updatedFavorites = favoriteMeals.filter((meal) => meal.id !== mealId);
    setFavoriteMeals(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="favorites">
      <h2>Your Favorite Recipes</h2>
      {favoriteMeals.length === 0 ? (
        <p>No favorite recipes yet. Explore and add some!</p>
      ) : (
        // Map through favorite meals and render a button for each
        favoriteMeals.map((meal) => (
          <div key={meal.id}>
            <button onClick={() => handleShowModal(meal)}>{meal.name}</button>
            <button onClick={() => removeFromFavorites(meal.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Favorites;
