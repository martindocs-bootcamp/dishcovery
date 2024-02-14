import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Favorites = () => {
  // Retrieve favorite meals from local storage or initialize as empty array
  const [favoriteMeals, setFavoriteMeals] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  // Function to handle adding meal to favorites
  const handleAddToFavorites = (meal) => {
    // Check if the meal is already in favorites
    const isAlreadyFavorite = favoriteMeals.some(
      (favorite) => favorite.label === meal.label
    );

    if (isAlreadyFavorite) {
      showToastError("Meal is already in favorites!");
    } else {
      // Add the meal to favorites
      setFavoriteMeals([...favoriteMeals, meal]);
      // Update local storage
      localStorage.setItem(
        "favorites",
        JSON.stringify([...favoriteMeals, meal])
      );
      showToastSuccess("Meal added to favorites!");
    }
  };

  // Function to remove a meal from favorites
  const removeFromFavorites = (label) => {
    const updatedFavorites = favoriteMeals.filter(
      (meal) => meal.label !== label
    );
    setFavoriteMeals(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    showToastSuccess("Meal removed from favorites!");
  };

  // Function to display a success toast message
  const showToastSuccess = (message) => {
    toast.success(message);
  };

  // Function to display an error toast message
  const showToastError = (message) => {
    toast.error(message);
  };

  return (
    <div className="favorites">
      <h2>Your Favorite Recipes</h2>
      {/* Map through favorite meals and render a button for each */}
      {favoriteMeals.map((meal) => (
        <div key={meal.label}>
          <button onClick={() => handleShowModal(meal)}>{meal.label}</button>
          <button onClick={() => removeFromFavorites(meal.label)}>
            Remove from Favorites
          </button>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
