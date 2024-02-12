import { Outlet } from "react-router-dom";
import { Navigation, Footer, Aside } from "../../components";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SharedLayout = () => {
  return (
    <>
      <Navigation />
      <Container fluid className="content">
        <Row>
         {/* <Col md={2}> */}
            {/* <Aside /> */}
          {/* </Col>  */}
          {/* <Col md={10}> */}
          <Col>
            {/* Content outlet for rendering routes */}
            <Outlet />            
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default SharedLayout;
