import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { PropTypes } from 'prop-types';

const IngridientsCard = ({ingredients}) => {
  return (
    <Card className='ingridients-card'>    
        <Card.Header className='ingridients-card-header print-ingredients-header'>
            <h3>{ingredients.length} Ingridients</h3>
        </Card.Header>
        <Card.Body className='print-ingredients'>           
            <ListGroup variant="flush" id="ingridients">
                {
                    ingredients.map((ingredient, index) => {
                        const{image, food, text} = ingredient;
                        
                        return (
                            <ListGroup.Item 
                                key={index}   
                                className='print-space'                     
                            >
                                <div className='ingridients-card-img'>
                                    <img 
                                        src={image} 
                                        alt={`image of ${food}`}  
                                        className='no-print'     
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