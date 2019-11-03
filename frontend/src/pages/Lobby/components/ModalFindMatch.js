import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { setInterval, clearInterval } from 'timers';

let timer;

export class ModalFindMatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countTime: 0
    };
  }

  formatTime = value => {
    const min = Math.round(value / 60);
    const sec = value % 60;
    return `${min < 10 ? '0' + min : min} : ${sec < 10 ? '0' + sec : sec}`;
  };

  componentDidMount() {
    timer = setInterval(() => {
      this.setState({
        countTime: this.state.countTime + 1
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(timer);
  }

  render() {
    const { countTime } = this.state;
    const { showModal, handleCancelPlayOnline } = this.props;
    return (
      <Modal show={showModal} onHide={() => {}}>
        <Modal.Header className="justify-content-center">
          <Modal.Title>Tìm kiếm người chơi</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          {this.formatTime(countTime)}
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button
            variant="danger"
            onClick={() => {
              handleCancelPlayOnline();
            }}
          >
            Hủy
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ModalFindMatch;
