
function Ingredients({ingredients}) {

  return (
    <div className="ingredients m-4">
      <h3 className="mb-3">Ingredients</h3>
      <section>
        {/* Render each ingredient in a list */}
        <ul className="list-group ">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="list-group-item ">
              <div style={{ display: "flex", alignItems: "center" }}>
                {ingredient.text}
                {ingredient.image && (
                  <img
                    src={ingredient.image}
                    alt={ingredient.text}
                    style={{ width: "50px", marginLeft: "10px",borderRadius:"50px" }}
                  />
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
export default Ingredients;
