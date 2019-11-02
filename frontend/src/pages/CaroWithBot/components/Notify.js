import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Notify = props => {
  let history = useHistory();
  const { isPlayer1Win, show, handleResetBoard, userName, botName } = props;

  const handleBackToLobby = () => {
    history.push('/');
    handleResetBoard();
  };

  return (
    <Modal show={show}>
      <Modal.Header className="justify-content-center">
        <Modal.Title>Chiken Dinner</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        {isPlayer1Win ? botName : userName} Win
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button onClick={handleBackToLobby}>Again</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Notify;
