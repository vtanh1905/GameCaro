import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const Notify = props => {
  const { isPlayer1Win, show, userName, botName, handleBackToLobby } = props;

  return (
    <Modal show={show} onHide={() => {}}>
      <Modal.Header className="justify-content-center">
        <Modal.Title>Chiken Dinner</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        {isPlayer1Win ? botName : userName} Win
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button onClick={handleBackToLobby}>Xác nhận</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Notify;
