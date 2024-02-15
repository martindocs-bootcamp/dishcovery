import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useGlobalContext } from '../../hooks/useGlobalContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// Favorites component
const Favorites = () => {  
  // Properties and functions from global context
  const { removeFromLocalStorage, getFromLocalStorage, fetchEdamamRecipes } = useGlobalContext();
  
  // useNavigate hook
  const navigate = useNavigate();

  // State to manage favorites
  const [favorites, setFavorites] = useState(getFromLocalStorage());

  // Fetch latest favorites from local storage after removing an item
  const handleRemoveClick = (title) => {
     removeFromLocalStorage(title);
     setFavorites(getFromLocalStorage());
   };

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
                  className='favorites-col'              
                >        
                <Card 
                  className='favorites-card h-100'                 
                >
                  <div className="favorites-img-container">
                    <Card.Img 
                      variant="top" 
                      src={image} 
                      className='favorites-img'                      
                      />
                    <div 
                      className="favorites-overlay"
                      onClick={()=> handleCardClick(title)}
                    >
                      <div className="favorites-view-recipe">View Recipe</div>
                    </div>
                  </div>
                  <Card.Body className='favorites-card-body'>
                    <Card.Title className='favorites-card-title'>{title}</Card.Title>                    
                  </Card.Body>
                  <Card.Footer className='d-flex justify-content-center'>
                    <Button
                      onClick={()=> handleRemoveClick(title)}
                      className='favorites-remove-btn'
                    >
                      Remove
                    </Button>
                  </Card.Footer>
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