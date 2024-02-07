import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MainContent, Likes } from '../../components'; 

const Home = () => {
    return (
      <main className="home">
        <Row>
          <Col>
            <h2>Title</h2>
            <div className='home-btn'>
              links to steps or nutritions or drinks
              <Likes />
            </div>
            <section className='home-content'>
              <MainContent />
            </section>
          </Col>
          <Col>
            <img src="..." alt="..." />
            <section className="home-ingridients">
             ingridients
            </section>
          </Col>
        </Row>
      </main>
    )
  }
  
  export default Home;
  