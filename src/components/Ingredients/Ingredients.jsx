import { PropTypes } from 'prop-types';

function Ingredients({ ingredients }) {
  return (
    <section className="ingredients">
           
      <h3>Ingredients</h3>        
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

Ingredients.propTypes = {
  ingredients: PropTypes.string,
}

export default Ingredients;
