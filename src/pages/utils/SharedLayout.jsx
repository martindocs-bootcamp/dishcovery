import { Outlet } from "react-router-dom";
import { Navigation, Footer } from "../../components";
import Container from 'react-bootstrap/Container';

// SharedLayout component
const SharedLayout = () => {
  return (
    <>
      {/* Render the Navigation component */}
      <Navigation />

      {/* Container for the main content */}
      <Container fluid className="content"> 

          {/* Render the content based on the current route */}      
          <Outlet />                      
      </Container>

      {/* Render the Footer component */}
      <Footer />
    </>
  )
}

export default SharedLayout;
