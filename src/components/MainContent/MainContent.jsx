import React from "react";

// Defining the MainContent using arrow function syntax with props
const MainContent = (props) => {
  // Destructuring the data object from props and extracting the meals property, assigning it to the variable name meals
  // const { meals } = props.data;
  const instructions = props.edamanData.hits[0].recipe.ingredientLines;
  // Checking if meals array is emapty or falsy
  if (!instructions || instructions.length === 0) {
    return <div>NO MEAL DATA AVAIABLE</div>;
  }

  // Extracting the instructions for the first meal in the meals array
  // const { strInstructions } = meals[0];

  return (
    <div className="main overflow-auto">
      {/* Rendering the instructions of the first meal  */}
      <h3>Instructions</h3>
      <ul>
        {instructions.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      {/* {strInstructions} */}
    </div>
  );
};

export default MainContent;
