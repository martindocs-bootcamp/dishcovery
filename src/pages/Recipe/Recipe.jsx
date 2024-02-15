import { useGlobalContext } from '../../hooks/useGlobalContext'; 
import { useEffect, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Loading, RecipeCard, IngridientsCard } from '../../components';
import Card from 'react-bootstrap/Card';
import { Link, useLocation } from 'react-router-dom';

// Recipe component
const Recipe = () => {
  // Properties and functions from global context
  const { isLoading, edamamAPI, fetchEdamamRecipes } = useGlobalContext();  
  const componentRef = useRef();

  // Get the current location 
  const location = useLocation(); 
  const favTitle = location.state?.title;
 
  // Use ReactToPrint hook for handling printing
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  // If the tile of recipe if True it means yser clicked on recipe in Favorites   
  useEffect(() => {
    if (favTitle) {
      fetchEdamamRecipes(favTitle);
    // Otherwise fetch the date when user search for it
    } else {      
      fetchEdamamRecipes();
    }
  }, [favTitle]);
 
  // Display loading spinner while data is being fetched
  if(isLoading) {
    return <Loading />
  }

  // Handle case when no recipe is found
  if(edamamAPI.length === 0) {
    return (
      <section className="no-recipe">
        <h2>No recipe found</h2>
      </section>
    )
  }
 
  // Extract recipe data
  const recipeData = edamamAPI[0];

  const{
    label, 
    image, 
    ingredients, 
    url, 
    source, 
    yield:servings,
    calories,
    totalTime,    
    totalNutrients,  
    // Depend of the data recived if True ? user used Search : otherwise is clicked Favorite
  } = Array.isArray(recipeData) ? recipeData[0].recipe : recipeData.recipe;

  // Same as above , depend of the user interaction extract recipe ID
  const recipeID = Array.isArray(recipeData) && recipeData.length > 0
  ? recipeData[0]._links.self.href.split(/[/?]/)[6]
  : recipeData._links.self.href.split(/[/?]/)[6];
  
  return edamamAPI.length !== 0 && (
    <section className="recipe" ref={componentRef}>

      {/* Display recipe title */}
      <h2 className='recipe-title print-title'>{label}</h2>    

        {/* Render RecipeCard component */}
        <RecipeCard 
          handlePrint={handlePrint}            
          image={image}
          url={url}
          source={source}
          servings={servings}
          calories={calories}
          totalTime={totalTime}
          title={label}
          totalNutrients={totalNutrients}
          id={recipeID}
        />
       
        {/* Render IngridientsCard component */}
        <IngridientsCard ingredients={ingredients} />              

      {/* Display preparation section */}
      <h3 className='recipe-prep no-print'>Preparation</h3>
      <div className='d-flex align-items-baseline mb-3'>

        {/* Button to redirect to the orginal/source recipe */}
        <Card.Link             
            className="btn btn-primary recipe-btn ms-3 no-print" 
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            >Instructions</Card.Link>
        <p className='no-print'>on {source}</p>        
      </div>

      <h3 className='recipe-drink no-print'>Drinks ideas</h3> 
      <div className='d-flex align-items-baseline'>

        {/* Button to get random drink */}
        <Card.Link
          className="btn btn-primary recipe-btn ms-3 no-print"
          as={Link}
          to="/drinks"
          >
          Get Recipe
        </Card.Link>
      </div>
    </section>
  )
}
  
export default Recipe;
  