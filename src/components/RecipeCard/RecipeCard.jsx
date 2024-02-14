import { PropTypes } from 'prop-types';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { Nutrition, ShareButtons } from '../../components';


import img from '../../assets/img-food.jpg'; //temp

const RecipeImgCard = ({
  handlePrint,   
  image, 
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
        <Row>
          <Col md="6">
            <Card.Img variant="top" src={img} className='recipe-card-img'/>
          </Col>
          <Col md="6" className='recipe-card-details'>
            <Row>
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
              
        <div className='d-flex align-items-baseline'>
          <p className='me-2'>Fancy a drink?</p> 

          <Card.Link
            className="btn btn-primary recipe-card-btn"
            as={Link}
            to="/drinks"
            >
            Get one
          </Card.Link>
        </div>
        
      </Card.Footer>
    </Card>    
  )
}

RecipeImgCard.propTypes = {
    handlePrint: PropTypes.func.isRequired, 
    image: PropTypes.string.isRequired, 
    url: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired,
    totalTime: PropTypes.number.isRequired,
    servings: PropTypes.number.isRequired,
    totalNutrients: PropTypes.object.isRequired,
}

export default RecipeImgCard;