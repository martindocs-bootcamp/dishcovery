import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { PropTypes } from 'prop-types';

const IngridientsCard = ({ingredients}) => {
  return (
    <Card className='ingridients-card'>    
        <Card.Header className='ingridients-card-header'>
            <h3 >{ingredients.length} Ingridients</h3>
        </Card.Header>
        <Card.Body>
            {/* <div className='ingridients-card-header'>
                <Card.Link                      
                    className='ingridients-card-title'
                    href="#ingridients"
                    >Ingridients</Card.Link>| 
                <Card.Link    
                    className='ingridients-card-title'                 
                    href="#nutritions"
                >Nutritions</Card.Link>
            </div> */}
                <ListGroup variant="flush" id="ingridients">
                    {
                        ingredients.map((ingredient, index) => {
                            const{image, food, text} = ingredient;
                            
                            return (
                                <ListGroup.Item 
                                    key={index}                        
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
        </Card.Body> 
    </Card>
  )
}

IngridientsCard.propTypes = {
    ingredients: PropTypes.array.isRequired,
}

export default IngridientsCard;