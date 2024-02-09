import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { 
  MainContent, 
  Likes,
  Title,
  Ingredients,
  ImageFood,
} from '../../components'; 
import { useGlobalContext } from '../../hooks/useGlobalContext'; 
import data from "../../data/data.json";

const Recipe = () => {
  const { edamamAPI } = useGlobalContext();  
  
  if(edamamAPI.length === 0){
    return (
      <section className="">
        Search for recipe
      </section>
    )
  }

  return edamamAPI.length !== 0 && (
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
  
export default Recipe;
  