import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
  return (    
    <Navbar className='nav'>
      <Container className='nav-container'>
        <Link to="/"><Logo /></Link>        
        <Nav className="me-auto nav-menu">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Favourites</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
