import { Outlet } from "react-router-dom";
import { Navigation, Footer } from "../../components";
import Container from 'react-bootstrap/Container';

const SharedLayout = () => {
  return (
    <>
      <Navigation />
      <Container fluid className="content">       
          <Outlet />                      
      </Container>
      <Footer />
    </>
  )
}

export default SharedLayout;
