function Ingredients({ ingredients }) {
  return (
    <section className="ingredients">
     
      <h3>Ingredients</h3>
        {/* Render each ingredient in a list */}
        <ul className="list-group">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="list-group-item">
              <div className="listItems">
                {ingredient.image && (
                  <img src={ingredient.image} alt={ingredient.text} className="ingredientsImg" />
                )}
                {ingredient.text}
              </div>
            </li>
          ))}
        </ul>
      
    </section>
  );
}
export default Ingredients;
