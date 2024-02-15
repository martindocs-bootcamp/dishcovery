import landingImg from '../../assets/landing-img.png';
import { Search } from '../../components';
import { useState } from 'react';

// LandingPage component
const LandingPage = () => {
  // State to track whether the landing page image has loaded
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="landing-page">   

        {/* Display the Search component once the image has loaded */}
        {
          imageLoaded && <Search />
        }
          {/* Landing page image */}
          <img 
            src={landingImg} 
            className='landing-page-img' 
            onLoad={() => setImageLoaded(true)}
          />             
    </section>
  )
}
  
export default LandingPage;