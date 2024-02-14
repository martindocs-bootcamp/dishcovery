import { PropTypes } from 'prop-types';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { Nutrition, ShareButtons } from '../../components';
import Button from 'react-bootstrap/Button';
import { FaPrint } from "react-icons/fa";

import img from '../../assets/img-food.jpg'; //temp

const RecipeImgCard = ({
  handlePrint,   
  image, 
  title,
  url, 
  calories,
  totalTime,
  servings,
  totalNutrients,
}) => {

  const{
    FAT:fat, 
    FASAT:fSaturated, 
    CHOCDF:carbs, 
    SUGAR:sugar, 
    PROCNT:protein,   
  } = totalNutrients;


return (
    <Card className='recipe-card'>      
      <Card.Body className='pb-0'>
        <Row className='print-row'>
          <Col md="6" className='print-col'>
            <div className='recipe-card-print no-print'>
              <Button 
                className='recipe-card-print-btn'
                onClick={handlePrint}
              >
                <FaPrint />
              </Button>         
            </div>  

            <Card.Img variant="top" src={img} className='recipe-card-img' alt={`Image of ${title}`} />
          </Col>
          <Col md="6" className='recipe-card-details mb-3 print-col'>
            <Row className='mb-4'>
              <Col>
                Total Time: <br />{totalTime ? `${totalTime} mins` : 'N/A'} 
              </Col>
              <Col>
                Servings: <br />{servings}
              </Col>
              <Col>
                Calories: <br />{Math.round(calories/servings)} kcal
              </Col>
            </Row>

            <ListGroup variant="flush">
              <h4>Nutrition Facts <span>(per serving)</span></h4>  
          
              <ListGroup.Item>                
                <Nutrition 
                  label={fat.label} 
                  value={fat.quantity} 
                  servings={servings}
                />
              </ListGroup.Item>
              <ListGroup.Item>
              <Nutrition 
                  label={fSaturated.label} 
                  value={fSaturated.quantity} 
                  servings={servings}
                />
              </ListGroup.Item>
              <ListGroup.Item><Nutrition 
                  label={carbs.label} 
                  value={carbs.quantity} 
                  servings={servings}
                />
              </ListGroup.Item>
              <ListGroup.Item><Nutrition 
                  label={sugar.label} 
                  value={sugar.quantity} 
                  servings={servings}
                />
              </ListGroup.Item>
              <ListGroup.Item><Nutrition 
                  label={protein.label} 
                  value={protein.quantity} 
                  servings={servings}
                />
              </ListGroup.Item>              
            </ListGroup>

          </Col>
        </Row>

      </Card.Body>      
      <Card.Footer className='recipe-card-footer'>
        <ShareButtons url={url} handlePrint={handlePrint} />      
      </Card.Footer>
    </Card>    
  )
}

RecipeImgCard.propTypes = {
    handlePrint: PropTypes.func.isRequired, 
    image: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired, 
    url: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired,
    totalTime: PropTypes.number.isRequired,
    servings: PropTypes.number.isRequired,
    totalNutrients: PropTypes.object.isRequired,
}

export default RecipeImgCard;