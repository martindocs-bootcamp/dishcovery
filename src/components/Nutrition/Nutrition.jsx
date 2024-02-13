import React, { useState } from "react";

const Nutrition = ({ nutritions, daily }) => {
  const [servings, setServings] = useState(1);

  // Check if nutritions and daily are undefined or null, if so, set them to empty objects
  nutritions = nutritions || {};
  //   nutritions =  Object.values(nutritions).map(obj => ({ ...obj }))|| {};
  daily = daily || {};

  // Typical calorie content per unit values
  const caloriesPerUnit = {
    FAT: 9, // 9 Calories per gram for fat
    CHOCDF: 4, // 4 Calories per gram for carbs
    PROCNT: 4, // 4 Calories per gram for protein
  };

  // Function to calculate total calories served
  const calculateTotalCalories = () => {
    let totalCalories = 0;

    Object.keys(nutritions).forEach((nutrient) => {
      if (nutritions[nutrient].quantity && caloriesPerUnit[nutrient]) {
        const absoluteAmount = nutritions[nutrient].quantity;
        totalCalories += (absoluteAmount / 100) * caloriesPerUnit[nutrient];
      }
    });

    // Multiply total calories by the number of servings
    return Math.ceil(totalCalories * servings);
  };

  // Handle change in servings input
  const handleServingsChange = (event) => {
    const value = event.target.value;
    // Ensure servings is always at least 1
    // If the input value is greater than 0, set servings to that value,
    // otherwise, set servings to 1
    if (value > 0) {
      setServings(value);
    } else {
      setServings(1);
    }
  };

  const outputArray = Object.values(daily).map((obj) => ({ ...obj }));

  const outputArray2 = Object.values(nutritions).map((obj) => ({ ...obj }));

  const combinedArray = outputArray.map((obj1) => {
    const matchingObj = outputArray2.find((obj2) => obj2.label === obj1.label);

    return {
      label: obj1.label,
      percentage: obj1.quantity,
      quantity: matchingObj.quantity,
      unit: matchingObj.unit,
    };
  });

  return (
    <div>
      <hr />
      <h4>Nutrition</h4>
      <ul>
        {combinedArray.map(({ label, percentage, quantity, unit }, index) => (
          <li key={index}>
            <div style={{ display: "flex" }}>
              <p style={{ width: "100px" }}>{label}: </p>
              <p style={{ width: "30px", textAlign: "right" }}>
                {`${Math.ceil(percentage)}% `}
              </p>
              <p style={{ width: "70px", textAlign: "right" }}>
                {`${Math.ceil(quantity)}${unit}`}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <label htmlFor="servings">Servings:</label>
      <input
        type="number"
        id="servings"
        name="servings"
        value={servings}
        min="1"
        onChange={handleServingsChange}
      />

      <p>Total Calories Served: {calculateTotalCalories()}</p>
      <hr />
    </div>
    
  );
};

export default Nutrition;
