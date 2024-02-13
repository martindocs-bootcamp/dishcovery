import React, { useState, useEffect } from "react";

const Favorites = () => {
  // State to hold the list of favorite meals
  const [favoriteMeals, setFavoriteMeals] = useState([]);

  // Function to retrieve favorite meals from local storage
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavoriteMeals(favorites);
  }, []);

  // Function to handle removal of a meal from favorites
  const removeFromFavorites = (index) => {
    const updatedFavorites = [...favoriteMeals];
    updatedFavorites.splice(index, 1); // Remove the meal at the specified index
    setFavoriteMeals(updatedFavorites); // Update state
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // Update local storage
  };

  return (
    <div className="favorites">
      <h2>Your Favorite Recipes</h2>
      {/* Render favorite meals with remove button */}
      {favoriteMeals.map((meal, index) => (
        <div key={index}>
          <span>{meal.label}</span>
          <button onClick={() => removeFromFavorites(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
