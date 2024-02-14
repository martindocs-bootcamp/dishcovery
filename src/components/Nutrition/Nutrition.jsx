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

export default Nutrition;