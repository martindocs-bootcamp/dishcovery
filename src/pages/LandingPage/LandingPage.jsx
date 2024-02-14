import landingImg from '../../assets/landing-img.png';
import { Search } from '../../components';
import { useState } from 'react';

const LandingPage = () => {

  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="landing-page">        
        {
          imageLoaded && <Search />
        }
          <img 
            src={landingImg} 
            className='landing-page-img' 
            onLoad={() => setImageLoaded(true)}
          />             
    </section>
  )
}
  
export default LandingPage;