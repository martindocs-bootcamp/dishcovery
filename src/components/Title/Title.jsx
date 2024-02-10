function Title(props) {
  // Destructuring the data object from props and extracting the meals property, assigning it to the variable name meals
  // const meals = props.data.meals[0].strMeal;
  const title = props.edamanData.hits[0].recipe.label;

  // console.log(meals);
  // console.log(title);
  return (
    <>
      {/* <h2>{meals}</h2> */}
      <h2 className="title">{title}</h2>
    </>
  );
}
export default Title;
