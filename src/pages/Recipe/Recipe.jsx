import React, { useState, useEffect, useRef } from "react";
import { Row, Col, Button } from "react-bootstrap";
import {
  MainContent,
  Title,
  Ingredients,
  ImageFood,
  ShareButtons,
  Loading,
} from "../../components";
import { useGlobalContext } from "../../hooks/useGlobalContext";
import { Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { FaPrint } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Recipe = () => {
  const { isLoading, edamamAPI, fetchEdamamRecipes } = useGlobalContext();
  const componentRef = useRef();

  useEffect(() => {
    // Fetch the API data when the component mounts
    fetchEdamamRecipes();
  }, []);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (edamamAPI.length === 0) {
    return <section className="">Search for recipe</section>;
  }

  const { label, ingredientLines, image, ingredients, url } =
    edamamAPI[0].recipe;

  // Function to handle adding meal to favorites

  const handleAddToFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites.push({
      label: label,
      ingredients: ingredients,
      image: image,
      url: url,
    });
    localStorage.setItem("favorites", JSON.stringify(favorites));
    showToastSuccess("Meal added to favorites!");
  };

  // Function to display a success toast message - not working
  const showToastSuccess = (message) => {
    toast.success(message);
  };

  // Function to display an error toast message - not working
  const showToastError = (message) => {
    toast.error(message);
  };

  return (
    <main className="recipe" ref={componentRef}>
      <Row>
        <Col>
          <ImageFood image={image} />
          <Ingredients ingredients={ingredients} />
        </Col>
        <Col>
          <div className="recipe-btn">
            <Link to="/recipe">
              <Button variant="primary">Nutritions</Button>
            </Link>
            <Link to="/drinks">
              <Button variant="primary">Drinks</Button>
            </Link>
            <Button variant="primary">Likes</Button>
            <ShareButtons url={url} />
            <button className="recipe-print" onClick={handlePrint}>
              <FaPrint />
            </button>
            <Title title={label} />
            {/* Button to add meal to favorites */}
            <button className="favourite-btn" onClick={handleAddToFavorites}>
              &hearts;
            </button>
          </div>
          <section className="home-content">
            <MainContent ingredients={ingredientLines} />
          </section>
        </Col>
      </Row>
    </main>
  );
};

export default Recipe;
