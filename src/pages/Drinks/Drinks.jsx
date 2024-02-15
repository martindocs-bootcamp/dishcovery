import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../hooks/useGlobalContext'; 
import { useEffect } from 'react';
import { Loading } from '../../components';

// Drinks component
const Drinks = () => {
  // Properties and functions from global context
  const { isLoading, drinksAPI, fetchDrinksRecipes } = useGlobalContext();
  
  // Properties from drinksAPI
  const{
    strDrinkThumb, 
    strDrink,
    strCategory,
    strGlass,
    strInstructions,     
  } = drinksAPI;
 
  // Fetch drinks recipes on component mount
  useEffect(()=> {
    fetchDrinksRecipes();
  },[])

  // Extract ingredient data from the drinksAPI object
  const extractData = (obj) => {
    const data = [];

    // Filter out ingredient keys that have a non-empty value
    const ingredientKeys = Object.entries(obj).filter((key) => {
      return key[0].startsWith('strIngredient') && key[1]
    });
      
    // Iterate over the filtered ingredient keys and create an array of objects
    for (let i = 0; i < ingredientKeys.length; i++) {
      const ingredient = ingredientKeys[i][1];
      const measure = obj[`strMeasure${i+1}`]
      data.push({ingredient, measure});
    }
    
    return data;
  }

  // Extracted ingredient names array
  const ingredientNames = extractData(drinksAPI);

  // Display loading spinner while data is being fetched
  if(isLoading) {
    return <Loading />
  }

  return (
    <section className='drinks'>      
      <Card className='drinks'>
          <h2 className='drinks-title'>{strDrink}</h2>              
        <Card.Body className='pb-0'>              
          <Row>

            {/* Column for drink image and back button */}
            <Col md="6">
              <Card.Img variant="top" className='drinks-img' src={strDrinkThumb} alt={`Image of ${strDrink} drink`} />

              <div className='d-flex align-items-baseline drinks-btn-content'>
                <Card.Link
                  className="btn btn-primary drinks-btn mt-3"
                  as={Link}
                  to="/recipe"
                  >
                  Back to Recipe
                </Card.Link>
              </div>
            </Col>

            {/* Column for ingredient list, instructions, and additional details */}
            <Col md="6">
                <h4 className='drinks-headings'>{ingredientNames.length} Ingredients</h4> 
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

                {/* Instructions */}
                <h4 className='drinks-headings'>Instructions</h4>
                <Card.Text>{strInstructions}</Card.Text>   
                <Card.Text className='drinks-other'>Serve in {strGlass}</Card.Text>   

                {/* Additional details */}
                <h4 className='drinks-headings'>Category</h4>         
                <Card.Text className='drinks-other'>{strCategory}</Card.Text>
            </Col>          
          </Row>
        </Card.Body>
      </Card>
    </section>
  )
}

export default Drinks;