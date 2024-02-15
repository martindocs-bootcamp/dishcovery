import { useGlobalContext } from '../../hooks/useGlobalContext'; 
import { useEffect, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Loading, RecipeCard, IngridientsCard } from '../../components';
import Card from 'react-bootstrap/Card';
import { Link, useLocation } from 'react-router-dom';

const Recipe = () => {
  const { isLoading, edamamAPI, fetchEdamamRecipes } = useGlobalContext();  
  const componentRef = useRef();

  const location = useLocation(); 
  const favTitle = location.state?.title;
 
  
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });


  useEffect(() => {
    if (favTitle) {
      fetchEdamamRecipes(favTitle);
    } else {      
      fetchEdamamRecipes();
    }
  }, [favTitle]);
 

  if(isLoading) {
    return <Loading />
  }

  if(edamamAPI.length === 0) {
    return (
      <section className="no-recipe">
        <h2>No recipe found</h2>
      </section>
    )
  }
 
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
  } = Array.isArray(recipeData) ? recipeData[0].recipe : recipeData.recipe;

  const recipeID = Array.isArray(recipeData) && recipeData.length > 0
  ? recipeData[0]._links.self.href.split(/[/?]/)[6]
  : recipeData._links.self.href.split(/[/?]/)[6];
  
  return edamamAPI.length !== 0 && (
    <section className="recipe" ref={componentRef}>

      <h2 className='recipe-title print-title'>{label}</h2>    
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
       
        <IngridientsCard ingredients={ingredients} />              

      <h3 className='recipe-prep no-print'>Preparation</h3>
      <div className='d-flex align-items-baseline mb-3'>
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
  