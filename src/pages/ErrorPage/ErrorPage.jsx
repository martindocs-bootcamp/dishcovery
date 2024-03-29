import { Link } from 'react-router-dom';
import errorImg from '../../assets/error404.svg';

// ErrorPage component
const ErrorPage = () => {
  return (    
    <div className='error'>
      <h2 className='error-header'>
        Oops... Page Not Found
      </h2>

      {/* Link to navigate back to the home page */}
      <Link to="/" className='error-home'>back home</Link>
      
      {/* Image for the error page */}
      <img src={errorImg} alt="error 404 message" className='error-img' />
    </div>             
  )
}
  
export default ErrorPage;
