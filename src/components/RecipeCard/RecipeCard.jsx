import { PropTypes } from 'prop-types';
import ShareButtons from '../ShareButtons/ShareButtons';
import { FaPrint } from "react-icons/fa";
import Card from 'react-bootstrap/Card';

import img from '../../assets/img-food.jpg'; //temp

const RecipeImgCard = ({handlePrint, title, image, url, source}) => {

return (
    <Card className='recipe-card'>
        <Card.Header className='recipe-card-header'><h2>{title}</h2></Card.Header>
        <Card.Img variant="top" src={img} className='recipe-card-img'/>
      <Card.Body> 
        <ShareButtons url={url} />
        <button 
            className=''
            onClick={handlePrint}
        >
            <FaPrint />
        </button>
      </Card.Body>      
      <Card.Footer className='recipe-card-footer'>
        <Card.Link             
            className="btn btn-primary recipe-card-btn" 
            href={url}
        >Instructions</Card.Link>
        <p>on {source}</p>        
      </Card.Footer>
    </Card>    
  )
}

RecipeImgCard.propTypes = {
    handlePrint: PropTypes.func,
    title: PropTypes.string, 
    image: PropTypes.string, 
    url: PropTypes.string,
    source: PropTypes.string,
}

export default RecipeImgCard;