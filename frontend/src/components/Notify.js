import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const Notify = props => {
  const { isPlayer1Win, show, handleResetBoard } = props;

  return (
    <Modal show={show}>
      <Modal.Header className="justify-content-center">
        <Modal.Title>Chiken Dinner</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        {isPlayer1Win ? 'Player 1' : 'Player 2'} Win
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button onClick={handleResetBoard}>Again</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Notify;
