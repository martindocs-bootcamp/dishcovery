

// Defining the MainContent using arrow function syntax with props
const MainContent = (props) => {
  // Destructuring the data object from props and extracting the meals property, assigning it to the variable name meals
  const { meals } = props.data;
  // Checking if meals array is emapty or falsy
  if (!meals || meals.length === 0) {
    return <div>NO MEAL DATA AVAIABLE</div>;
  }

  // Extracting the instructions for the first meal in the meals array
  const { strInstructions } = meals[0];

  return (
    <div className="main">
      {/* Rendering the instructions of the first meal  */}
      {strInstructions}
    </div>
  );
};

export default MainContent;
