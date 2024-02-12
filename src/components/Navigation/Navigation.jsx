import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

const Navigation = () => {
  return (
    <nav className='nav'>      
      <Link to="/">
        <Logo />
      </Link>
    </nav>
  );
};

export default Navigation;
