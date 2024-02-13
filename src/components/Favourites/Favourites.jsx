import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const MyModal = ({ show, handleClose }) => {
  // This part is to etrieve the saved favorite meal from local storage
  const savedMeal = JSON.parse(localStorage.getItem("favoriteMeal"));

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Favourites ♥️</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* This part displays the saved favorite meal */}
          {savedMeal ? (
            <p>{savedMeal.strMeal}</p>
          ) : (
            <p>No favorite meal saved</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="close-btn"
            variant="secondary"
            onClick={handleClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyModal;
