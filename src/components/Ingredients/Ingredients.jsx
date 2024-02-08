import React from "react";

function Ingredients(props) {
  // Destructuring the meals prop
  const { meals } = props;
  // Setting an empty array to store ingredients
  const ingredientsArray = [];

  // Looping through ingredients
  for (let i = 1; i <= 20; i++) {
    const ingredient = meals[`strIngredient${i}`];

    // Checking if the ingredient exists
    if (ingredient) {
      // If it exist, push it to the ingredients array
      ingredientsArray.push(ingredient);
    } else {
      // If it doesn't exist, break out of the loop
      break;
    }
  }
  return (
    <>
      <h3>Ingredients</h3>
      <section>
        {/* Render each ingredient in a list */}
        <ul className="list-group">
          {ingredientsArray.map((ingredient, index) => (
            <li key={index} className="list-group-item">
              {ingredient}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
export default Ingredients;
