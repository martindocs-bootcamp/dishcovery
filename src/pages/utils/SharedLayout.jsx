import { Outlet } from "react-router-dom";
import { Navigation, Aside } from "../../components";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SharedLayout = () => {
  return (
    <>
      <Navigation />
      <Container fluid>
        <Row  className="content">
          <Col md={2}>
            <Aside />
          </Col>
          <Col md={10}>
            {/* Content outlet for rendering routes */}
            <Outlet />            
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default SharedLayout;