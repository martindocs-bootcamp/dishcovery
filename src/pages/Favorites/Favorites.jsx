import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useGlobalContext } from '../../hooks/useGlobalContext';
import { useNavigate } from 'react-router-dom';

const Favorites = () => {  
  const { getFromLocalStorage, fetchEdamamRecipes } = useGlobalContext();
  const favorites = getFromLocalStorage();
  const navigate = useNavigate();

  const handleCardClick = (title) => {
    fetchEdamamRecipes(title);
    navigate('/recipe', { state: { title } });
  }

  return (
    <section className="favorites">
      <h2 className="favorites-title text-center">Your Favorite Recipes </h2>      
      <Row xs={1} md={3} lg={4} className='g-4'>
          {
            favorites.map((recipe, index) => {
              const{title, image} = recipe;

              return (
                <Col
                  key={index}                 
                >        
                <Card 
                  className='favorites-card'
                  onClick={()=> handleCardClick(title)}
                >
                  <Card.Img 
                    variant="top" 
                    src={image} 
                    className='favorites-img'
                  />
                  <Card.Body>
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