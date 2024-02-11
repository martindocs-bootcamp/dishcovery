import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";

const Navigation = () => {
  return (
    <nav>      
      <Link to="/">
        <img src={logo} className="logo" />
      </Link>
    </nav>
  );
};

export default Navigation;
