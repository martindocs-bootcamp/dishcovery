import React from "react";

function Title(props) {
  // Destructuring the data object from props and extracting the meals property, assigning it to the variable name meals
  const { meals } = props.data;

  return <h2 className="title">{meals[0].strMeal}</h2>;
}
export default Title;
