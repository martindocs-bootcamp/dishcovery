import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Recipe nutritions display
const Nutrition = ({label, value, servings}) => {
  return (
    <Row>
      {/* Nutrition labe */}
      <Col>{label}</Col>

      {/* Display the value per serving for each nutrition */}
      <Col className="text-end">{Math.round(value/servings)}g</Col>
    </Row>
  )
}

Nutrition.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  servings: PropTypes.number.isRequired,
}

export default Nutrition;