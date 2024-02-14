import React from "react";

const MealDetails = ({ meal, handleClose, handleRemove }) => {
  // Function to handle removal of meal from favorites
  const handleRemoveFromFavorites = () => {
    // Get current favorites from local storage
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    // Filter out the selected meal
    const updatedFavorites = favorites.filter(
      (favMeal) => favMeal.id !== meal.id
    );
    // Update favorites in local storage
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    // Call the handleRemove function to update state in parent component
    handleRemove(meal.id);
    // Close the modal
    handleClose();
  };

  return (
    <div className="meal-details">
      <h2>{meal.name}</h2>
      <p>{meal.details}</p>
      <button onClick={handleRemoveFromFavorites}>Remove from Favorites</button>
    </div>
  );
};

export default MealDetails;
