import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { 
  MainContent, 
  Title,
  Ingredients,
  ImageFood,
  ShareButtons,
} from '../../components'; 
import { useGlobalContext } from '../../hooks/useGlobalContext'; 
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Recipe = () => {
  const { edamamAPI, fetchEdamamRecipes } = useGlobalContext();  

  useEffect(() => {
    // Fetch the API data when the component mounts
    fetchEdamamRecipes();
  }, []);

  if(edamamAPI.length === 0){
    return (
      <section className="">
        Search for recipe
      </section>
    )
  }
 
  const{label, ingredientLines, image, ingredients, url} = edamamAPI[0].recipe;

  return edamamAPI.length !== 0 && (
    <main className="home">
      <Row>
        <Col>
        <Title title={label}/>            
          <div className='home-btn'>           
            <Link to="/recipe">
              <Button vatiant="primary">Nutritions</Button>
            </Link>
            <Link to="/drinks">
              <Button vatiant="primary">Drinks</Button>
            </Link>            
            <Button variant='primary'>Likes</Button>

            <ShareButtons url={url} />            
          </div>
          <section className='home-content'>
            <MainContent ingrediens={ingredientLines}/>
          </section>
        </Col>
        <Col>
          <ImageFood image={image} />
          <Ingredients ingredients={ingredients}/>
        </Col>
      </Row>
    </main>
  )
}
  
export default Recipe;
  