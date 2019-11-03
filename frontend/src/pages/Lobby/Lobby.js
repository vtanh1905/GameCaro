import React, { useState } from 'react';
import { Container, Card, Media } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

import ModalFindMatch from './components/ModalFindMatch';

const Lobby = props => {
  const [showModal, setShowModal] = useState(false);
  let history = useHistory();
  const { user, io, handleSaveCompetitor } = props;

  //Kiểm Tra Login chưa
  if (JSON.parse(localStorage.getItem('token')) === null) {
    history.push('/login');
    return <></>;
  } else {
    if (user === null) {
      return <></>;
    }
  }

  const handlePlayWithBot = () => {
    history.push('play/caro/offline');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    history.push('/login');
  };

  const handlePlayOnline = () => {
    setShowModal(true);
    io.emit('CLIENT_SEND_FIND_MATCH', { user });
    io.on('SERVER_SEND_INFO_COMPETITOR', req => {
      handleSaveCompetitor(req.user);

      //Move to Play
      history.push('/play/caro/online');
    });
  };

  const handleCancelPlayOnline = () => {
    setShowModal(false);
    io.emit('CLIENT_SEND_CANCEL_FIND_MATCH', { user });
  };

  return (
    <Container>
      <Card className="card mt-5" style={{ width: '25rem' }}>
        <Card.Header className="font-weight-bold">
          Thông tin cá nhân
        </Card.Header>
        <Card.Body>
          <Media>
            <img
              style={{ maxWidth: '3rem' }}
              className="mr-3"
              src={user.avatarURL === '' ? 'images/avatar.jpg' : user.avatarURL}
              alt="Avatar"
            />
            <Media.Body>
              <h5>
                <Link to="profile">{user.fullname}</Link>
              </h5>
              <p>
                Win : {user.matches.win} - Lose {user.matches.lose} - Tie{' '}
                {user.matches.tie}
              </p>
            </Media.Body>
          </Media>
        </Card.Body>
      </Card>
      <div className="d-flex justify-content-center mt-5">
        <div style={{ maxWidth: '25rem' }}>
          <button
            type="button"
            className="btn btn-info btn-lg btn-block"
            onClick={() => handlePlayOnline()}
          >
            Đấu
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-lg btn-block"
            onClick={() => handlePlayWithBot()}
          >
            Luyện tập
          </button>
          <button
            type="button"
            className="btn btn-danger btn-lg btn-block"
            onClick={handleLogout}
          >
            Đăng Xuất
          </button>
        </div>
      </div>
      {showModal ? (
        <ModalFindMatch
          showModal={showModal}
          handleCancelPlayOnline={handleCancelPlayOnline}
        />
      ) : (
        ''
      )}
    </Container>
  );
};

export default Lobby;
