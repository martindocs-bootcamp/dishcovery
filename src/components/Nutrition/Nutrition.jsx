import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Nutrition = ({label, value, servings}) => {
  return (
    <Row>
      <Col>{label}</Col>
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