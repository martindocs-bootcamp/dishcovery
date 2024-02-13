import { PropTypes } from 'prop-types';
import img from '../../assets/img-food.jpg';

function ImageFood({ image }) {
  return (
    // TEMP img add alt
    <img className="imageFood" src={img} alt="Food" />
  );
}

ImageFood.propTypes = {
  image: PropTypes.string,
}

export default ImageFood;
