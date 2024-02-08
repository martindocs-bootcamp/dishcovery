import React from "react";

function ImageFood(props) {

    // // Destructuring the data object from props and extracting the meals property, assigning it to the variable name meals
  const { meals } = props.data;

  // Extracting the image URL from the first meal in the 'meals' array
  const imgUrl = meals[0].strMealThumb;
  return (
    <>
    {/* Render the image with its URL as 'src' and set the width */}
      <img src={imgUrl} alt="Food" style={{width:"250px"}}/>
    </>
  );
}

export default ImageFood;
