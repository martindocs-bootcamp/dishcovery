import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const MealModal = ({ show, handleClose, meal }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{meal.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Details about the meal can go here.</p>
        {/* Render additional meal details here */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MealModal;
