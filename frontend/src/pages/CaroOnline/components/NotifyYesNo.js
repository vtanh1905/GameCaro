import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const NotifyYesNo = props => {
  const { show, handleYes, handleNo, children } = props;

  return (
    <Modal show={show} onHide={() => {}}>
      <Modal.Header className="justify-content-center">
        <Modal.Title>Thông báo</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">{children}</Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button onClick={handleYes}>Đồng ý</Button>
        <Button variant="secondary" onClick={handleNo}>
          Từ chối
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NotifyYesNo;
