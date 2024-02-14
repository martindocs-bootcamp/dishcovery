import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { 
  MainContent, 
  Title,
  Ingredients,
  ImageFood,
  ShareButtons,
  Loading,
} from '../../components'; 
import { useGlobalContext } from '../../hooks/useGlobalContext'; 
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
// import { FaPrint } from "react-icons/fa";
import {RecipeCard, IngridientsCard} from '../../components';
import Card from 'react-bootstrap/Card';

const Recipe = () => {
  const { isLoading, edamamAPI, fetchEdamamRecipes } = useGlobalContext();  
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    // Fetch the API data when the component mounts
    fetchEdamamRecipes();
  }, []);

  if(isLoading) {
    return <Loading />
  }

  if(edamamAPI.length === 0){
    return (
      <section className="no-recipe">
        Search for recipe
      </section>
    )
  }
 
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
  
  } = edamamAPI[0].recipe; 

 

  return edamamAPI.length !== 0 && (
    <section className="recipe" ref={componentRef}>
      <h2 className='recipe-title'>{label}</h2>
      {/* <Row className='d-flex justify-content-center mt-4'> */}
        {/* <Col md="6"> */}
          <RecipeCard 
            handlePrint={handlePrint}
            // title={label}
            image={image}
            url={url}
            source={source}
            servings={servings}
            calories={calories}
            totalTime={totalTime}
            totalNutrients={totalNutrients}
          />

          {/* <Title title={label}/>
          <ImageFood image={image} />
          <ShareButtons url={url} />
          <button 
              className='recipe-print'
              onClick={handlePrint}
            >
              <FaPrint />
          </button> 
          <Ingredients ingredients={ingredients}/>
          <h3>Preparation</h3>
          <Button 
              type="button"
              className='btn-source'
          >Source</Button>             */}
        {/* </Col> */}
        {/* <Col md="6">       */}
          <IngridientsCard 
            ingredients={ingredients} 
            
          />         
           {/* <div className='recipe-btn'>           
            <Link to="/recipe">
              <Button vatiant="primary">Nutritions</Button>
            </Link>
            <Link to="/drinks">
              <Button vatiant="primary">Drinks</Button>
            </Link>            
            <Button variant='primary'>Likes</Button>

            <ShareButtons url={url} />     

            <button 
              className='recipe-print'
              onClick={handlePrint}
            >
              <FaPrint />
            </button>        
            
          </div>           */}
          {/* <section className='recipe-content'>
            <MainContent ingrediens={ingredientLines}/>
          </section> */}
        {/* </Col>         */}
      {/* </Row> */}

      <h3 className='recipe-prep'>Preparation</h3>
      <div className='d-flex align-items-baseline'>
        <Card.Link             
            className="btn btn-primary recipe-card-btn" 
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            >Instructions</Card.Link>
        <p>on {source}</p>        
      </div>

        
    </section>
  )
}
  
export default Recipe;
  