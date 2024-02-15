import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useGlobalContext } from '../../hooks/useGlobalContext'; 

// Main navigation
const Navigation = () => {
  const { handleResetState } = useGlobalContext();

  // Render the navigation bar with links and logo
  return (    
    <Navbar className='nav'>
      <Container className='nav-container'>
        {/* Link to the home page with the logo, reset state on click */}
        <Link 
          to="/"
          onClick={handleResetState}
        ><Logo /></Link>        

        {/* Navigation menu links */}
        <Nav className="me-auto nav-menu">
          <Nav.Link 
            as={Link} 
            to="/"
            onClick={handleResetState}
          >Recipes</Nav.Link>

          {/* Favorites link with a route to the favorites page */}
          <Nav.Link as={Link} to="/favorites">Favourites</Nav.Link>

          {/* Contact link with a route to the contact page */}
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
