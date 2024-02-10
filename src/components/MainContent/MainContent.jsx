// Defining the MainContent using arrow function syntax with props
const MainContent = ({ingrediens}) => {

  // Checking if meals array is emapty or falsy
  if (!ingrediens || ingrediens.length === 0) {
    return <div>NO MEAL DATA AVAIABLE</div>;
  }

  return (
    <div className="main overflow-auto">
      <h3>Instructions</h3>
      <ul>
        {/* Rendering the ingrediens of the first meal  */}
        {ingrediens.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      {/* {strInstructions} */}
    </div>
  );
};

export default MainContent;
