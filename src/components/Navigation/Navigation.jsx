import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useGlobalContext } from '../../hooks/useGlobalContext'; 

const Navigation = () => {
  const { handleResetState } = useGlobalContext();

  // const handleHomeCLick = () => {
  //   handleInput({
  //     name: 'search',
  //     value: ''
  //   });
  // }

  return (    
    <Navbar className='nav'>
      <Container className='nav-container'>
        <Link 
          to="/"
          onClick={handleResetState}
        ><Logo /></Link>        
        <Nav className="me-auto nav-menu">
          <Nav.Link 
            as={Link} 
            to="/"
            onClick={handleResetState}
          >Home</Nav.Link>
          <Nav.Link as={Link} to="/favourites">Favourites</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
