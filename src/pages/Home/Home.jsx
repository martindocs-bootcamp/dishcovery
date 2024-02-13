import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MainContent, Likes } from "../../components";
import data from "../../data/data.json";
import Title from "../../components/Title/Title";
import Ingredients from "../../components/Ingredients/Ingredients";
import ImageFood from "../../components/ImageFood/ImageFood";
import MyModal from "../../components/Favourites/Favourites";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleButtonClick = () => {
    const selectedMeal = data.meals[0];
    // Store the selected meal in local storage
    localStorage.setItem("favoriteMeal", JSON.stringify(selectedMeal));
    // Show the modal
    setShowModal(true);
  };

  return (
    <main className="home">
      <Row>
        <Col>
          <Title data={data} />
          <button className="fav-btn" onClick={handleButtonClick}>
            {" "}
            &hearts;{" "}
          </button>{" "}
          <div className="home-btn">
            links to steps or nutritions or drinks
            <Likes />
          </div>
          <section className="home-content">
            <MainContent data={data} />
          </section>
        </Col>
        <Col>
          <ImageFood data={data} />
          <Ingredients meals={data.meals[0]} />
        </Col>
      </Row>
      {showModal && <MyModal show={showModal} handleClose={handleModalClose} />}
    </main>
  );
};

export default Home;
