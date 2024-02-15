import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useGlobalContext } from '../../hooks/useGlobalContext';
import { useNavigate } from 'react-router-dom';

// Favorites component
const Favorites = () => {  
  // Properties and functions from global context
  const { getFromLocalStorage, fetchEdamamRecipes } = useGlobalContext();

  // Get favorites from local storage
  const favorites = getFromLocalStorage();
  // useNavigate hook
  const navigate = useNavigate();

  // Handle click on a favorite recipe card
  const handleCardClick = (title) => {
    // Fetch Edamam recipe details for the clicked title
    fetchEdamamRecipes(title);

    // Navigate to the recipe page with the selected title
    navigate('/recipe', { state: { title } });
  }

  return (
    <section className="favorites">

      {/* Heading for the favorites section */}
      <h2 className="favorites-title text-center">Your Favorite Recipes </h2> 

      {/* Display favorite recipe cards */}     
      <Row xs={1} md={3} lg={4} className='g-4'>
          {
            // Map over the favorites array to render each recipe card
            favorites.map((recipe, index) => {
              const{title, image} = recipe;

              return (
                <Col
                  key={index}                 
                >        
                <Card 
                  className='favorites-card h-100'
                  onClick={()=> handleCardClick(title)}
                >
                  <Card.Img 
                    variant="top" 
                    src={image} 
                    className='favorites-img'
                  />
                  <Card.Body className='favorites-card-body'>
                    <Card.Title className='favorites-card-title'>{title}</Card.Title>                    
                  </Card.Body>
                </Card>
                </Col>
              )
            })    
          }
      </Row>
    </section>
  );
};

export default Favorites;