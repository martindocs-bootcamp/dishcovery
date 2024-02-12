import landingImg from '../../assets/landing-img.png';
import { Search } from '../../components';

const LandingPage = () => {
  return (
    <section className="landing-page">
      <Search />
      <img src={landingImg} className='landing-page-img' />
    </section>
  )
}
  
export default LandingPage;