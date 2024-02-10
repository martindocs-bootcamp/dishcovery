import React from "react";

function ImageFood(props) {

    // // Destructuring the data object from props and extracting the meals property, assigning it to the variable name meals
  const { meals } = props.data;

// -----------------------------------

  // Could you please have a look the image does not open it might because of the API

  // const imageUrl = props.edamanData.hits[0].recipe.images.SMALL.url;
// ---------------------------------------
  // Extracting the image URL from the first meal in the 'meals' array
  const imgUrl = meals[0].strMealThumb;
  return (
    <>
    {/* Render the image with its URL as 'src' and set the width */}
      <img className="imageFood" src={imgUrl} alt="Food" style={{width:"250px"}}/>
      {/* <img src="imageUrl" alt="" srcset="" /> */}
    </>
  );
}

export default ImageFood;
