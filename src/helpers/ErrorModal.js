import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function ErrorModal({ show, errorMessage, onHide }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>{errorMessage}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ErrorModal;
