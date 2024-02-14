import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../hooks/useGlobalContext'; 
import { useEffect } from 'react';
import { Loading } from '../../components';

const Drinks = () => {
  const { isLoading, drinksAPI, fetchDrinksRecipes } = useGlobalContext();
  
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

  if(isLoading) {
    return <Loading />
  }

  return (
    <section className='drinks'>      
      <Card className='drinks'>
          <h2 className='drinks-title'>{strDrink}</h2>              
        <Card.Body className='pb-0'>              
          <Row>
            <Col md="6">
              <Card.Img variant="top" className='drinks-img' src={strDrinkThumb} alt={`Image of ${strDrink} drink`} />

              <div className='d-flex align-items-baseline'>
                <Card.Link
                  className="btn btn-primary drinks-btn mt-3"
                  as={Link}
                  to="/recipe"
                  >
                  Back to Recipe
                </Card.Link>
              </div>
            </Col>

            <Col md="6">
                <h4>{ingredientNames.length} Ingredients</h4> 
                <ListGroup variant="list-group-flush">
                {
                  ingredientNames.map((item, index) => {
                    
                    const{ingredient, measure} = item;

                    return (
                      <ListGroup.Item 
                        key={index}   
                        className='drinks-list-item'    
                      >
                        {ingredient} {measure}
                      </ListGroup.Item>
                    )
                  })
                }               
                </ListGroup>  

                <h4>Instructions</h4>
                <Card.Text>{strInstructions}</Card.Text>   
                <Card.Text className='drinks-other'>Serve in {strGlass}</Card.Text>   

                <h4>Category</h4>         
                <Card.Text className='drinks-other'>{strCategory}</Card.Text>
            </Col>          
          </Row>
        </Card.Body>
      </Card>
    </section>
  )
}

export default Drinks;