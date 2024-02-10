
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { MainContent, Title, Ingredients, ImageFood } from "../../components";
import { useGlobalContext } from "../../hooks/useGlobalContext";
import { Link } from "react-router-dom";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { 
  MainContent, 
  Title,
  Ingredients,
  ImageFood,
} from '../../components'; 
import { useGlobalContext } from '../../hooks/useGlobalContext'; 
import { Link } from 'react-router-dom';
import { useEffect } from 'react';


import data from "../../data/data.json";
import edamanData from "../../data/edamam.json";

const Recipe = () => {

  const { edamamAPI } = useGlobalContext();

  if (edamamAPI.length === 0) {
    return <section className="">Search for recipe</section>;
  }

  return (
    edamamAPI.length !== 0 && (
      <main className="home">
        <Row>
          <Col>
            {/* <Title data={data}/>  */}
            <Title edamanData={edamanData}/>
            <div className="home-btn">
              <Link to="/recipe">
                <Button vatiant="primary">Nutritions</Button>
              </Link>
              <Link to="/drinks">
                <Button vatiant="primary">Drinks</Button>
              </Link>
              <Button variant="primary">Likes</Button>
            </div>
            <section className="home-content">
              <MainContent edamanData={edamanData} />
            </section>
          </Col>
          <Col>
            <ImageFood data={data} />
            {/* <Ingredients meals={data.meals[0]}/> */}
            <Ingredients edamanData={edamanData} />
          </Col>
        </Row>
      </main>
    )
  );
};


  const { edamamAPI, fetchEdamamRecipes } = useGlobalContext();  

  useEffect(() => {
    // Fetch the API data when the component mounts
    fetchEdamamRecipes();
  }, []);

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
            <Link to="/recipe">
              <Button vatiant="primary">Nutritions</Button>
            </Link>
            <Link to="/drinks">
              <Button vatiant="primary">Drinks</Button>
            </Link>            
            <Button variant='primary'>Likes</Button>
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
