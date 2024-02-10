import React from "react";

function Ingredients(props) {
  // Destructuring the meals prop
  // const { meals } = props;
  const ingredients = props.edamanData.hits[0].recipe.ingredients;
  // Setting an empty array to store ingredients
  // const ingredientsArray = [];

  // Looping through ingredients
  // for (let i = 1; i <= 20; i++) {
  //   const ingredient = receipe[`ingredientLines${[i]}`];

  //   // Checking if the ingredient exists
  //   if (ingredient) {
  //     // If it exist, push it to the ingredients array
  //     ingredientsArray.push(ingredient);
  //   } else {
  //     // If it doesn't exist, break out of the loop
  //     break;
  //   }
  // }
  return (
    <div className="ingredients m-4">
      <h3 className="mb-3">Ingredients</h3>
      <section>
        {/* Render each ingredient in a list */}
        <ul className="list-group ">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="list-group-item ">
              <div style={{ display: "flex", alignItems: "center" }}>
                {ingredient.text}
                {ingredient.image && (
                  <img
                    src={ingredient.image}
                    alt={ingredient.text}
                    style={{ width: "50px", marginLeft: "10px",borderRadius:"50px" }}
                  />
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
export default Ingredients;
