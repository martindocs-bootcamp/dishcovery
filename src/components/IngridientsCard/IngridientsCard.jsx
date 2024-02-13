import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { PropTypes } from 'prop-types';

const IngridientsCard = ({ingredients}) => {
  return (
    <Card className='ingridients-card'>
        <Card.Header className='ingridients-card-header'>
            <Card.Link                 
                className="btn btn-primary ingridients-card-btn" 
                href="#ingridients"
            >Ingridients</Card.Link>  
            <Card.Link                  
                className="btn btn-primary ingridients-card-btn" 
                href="#nutritions"
            >Nutritions</Card.Link>
        </Card.Header>

        <Card.Body>
            <Card.Title id="ingridients" className='ingridients-card-title'>Ingridients</Card.Title>
                <ListGroup variant="flush">
                    {
                        ingredients.map((ingredient) => {
                            const{image, food, text, foodId} = ingredient;
                            
                            return (
                                <ListGroup.Item 
                                    key={foodId}                        
                                >
                                    <div className='ingridients-card-img'>
                                        <img 
                                            src={image} 
                                            alt={`image of ${food}`}                                             
                                        />
                                        <p>{text}</p>
                                    </div>
                            </ListGroup.Item>
                            )
                        })
                    }
                </ListGroup> 

                <Card.Title id="nutritions">Nutritions</Card.Title>
                    <ListGroup variant="flush">
                        
                    </ListGroup>

        </Card.Body> 
    </Card>
  )
}

IngridientsCard.propTypes = {
    ingredients: PropTypes.array.isRequired,
}

export default IngridientsCard;