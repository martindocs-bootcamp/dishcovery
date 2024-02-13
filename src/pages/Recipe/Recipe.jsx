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
import { FaPrint } from "react-icons/fa";
import Nutrition from '../../components/Nutrition/Nutrition';

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
      <section className="">
        Search for recipe
      </section>
    )
  }
 
  const{label, ingredientLines, image, ingredients, url, totalNutrients, totalDaily} = edamamAPI[0].recipe; 

  return edamamAPI.length !== 0 && (
    <main className="recipe" ref={componentRef}>
      <Row>
        <Col>
          <ImageFood image={image} />
          <Ingredients ingredients={ingredients}/>
        </Col>
        <Col>               
          <div className='recipe-btn'>           
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
            <Title title={label}/> 

            <Nutrition nutritions={totalNutrients} daily={totalDaily}/>  
          </div>
          <section className='home-content'>
            <MainContent ingrediens={ingredientLines}/>
          </section>
        </Col>        
      </Row>
    </main>
  )
}
  
export default Recipe;
  