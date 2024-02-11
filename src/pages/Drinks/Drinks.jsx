import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../hooks/useGlobalContext'; 
import { useEffect } from 'react';

const Drinks = () => {
  const { drinksAPI, fetchDrinksRecipes } = useGlobalContext();
  
  const{
    strDrinkThumb, 
    strDrink,
    strCategory,
    strGlass,
    strInstructions,     
  } = drinksAPI;

  useEffect(()=> {
    fetchDrinksRecipes();
  },[])

  const extractData = (obj) => {
    const data = [];

    const ingredientKeys = Object.entries(obj).filter((key) => {
      return key[0].startsWith('strIngredient') && key[1]
    });
      
    for (let i = 0; i < ingredientKeys.length; i++) {
      const ingredient = ingredientKeys[i][1];
      const measure = obj[`strMeasure${i+1}`]
      data.push({ingredient, measure});
    }
    
    return data;
  }

  const ingredientNames = extractData(drinksAPI);

  return (
    <section className='drinks'>
      <Link to="/recipe">
        <Button vatiant="primary">Nutritions</Button>
      </Link>
      <Link to="/drinks">
        <Button vatiant="primary">Drinks</Button>
      </Link>            
      <Button variant='primary'>Likes</Button>      
      <Card className='drinks'>
        <Row>
          <Col>
            <Card.Body>              
              <h2 className='drinks-title'>{strDrink}</h2>              

              <Card.Text>Ingredients</Card.Text> 
              <ListGroup variant="list-group-flush">
              {
                ingredientNames.map((item, index) => {
                  const{ingredient, measure} = item;

                  return (
                    <ListGroup.Item 
                      key={index}
                    >
                      {ingredient} {measure}
                    </ListGroup.Item>
                  )
                })
              }               
              </ListGroup>  
              <h3>Instructions</h3>
              <Card.Text>{strInstructions}</Card.Text>   
              <Card.Text>Serve in {strGlass}</Card.Text>   

              <h4>Category</h4>         
              <Card.Text>{strCategory}</Card.Text>
            </Card.Body>
          </Col>
          <Col>
            <Card.Img variant="top" src={strDrinkThumb} />
          </Col>
        </Row>
      </Card>
    </section>
  )
}

export default Drinks;