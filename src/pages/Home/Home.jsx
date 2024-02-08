import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MainContent, Likes } from '../../components'; 

import data from "../../data/data.json";
import Title from '../../components/Title/Title';
import Ingredients from '../../components/Ingredients/Ingredients';
import ImageFood from '../../components/ImageFood/ImageFood';




const Home = () => {
    return (
      <main className="home">
        <Row>
          <Col>
          <Title data={data}/>
            
            <div className='home-btn'>
              links to steps or nutritions or drinks
              <Likes />
            </div>
            <section className='home-content'>
              <MainContent data = {data}/>
            </section>
          </Col>
          <Col>
            <ImageFood data = {data} />
            <Ingredients meals={data.meals[0]}/>
          </Col>
        </Row>
      </main>
    )
  }
  
  export default Home;
  