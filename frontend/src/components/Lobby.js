import React from 'react';
import { Container, Card, Media } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Lobby = props => {
  const { user } = props;
  let history = useHistory();
  if (user === null) {
    history.push('/login');
  }

  const getUser = async () => {
    const res = await props.user;
    const user = await res.json();
    return user;
  };

  const handlePlay = () => {
    history.push('/play');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    history.push('/login');
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
              src="images/avatar.jpg"
              alt="Generic placeholder"
            />
            <Media.Body>
              <h5>Vũ Tuấn Anh</h5>
              <p>Win : 10 - Lose 5</p>
            </Media.Body>
          </Media>
        </Card.Body>
      </Card>

      <div className="d-flex justify-content-center mt-5">
        <div style={{ maxWidth: '25rem' }}>
          <button
            type="button"
            className="btn btn-info btn-lg btn-block"
            onClick={handlePlay}
          >
            Chơi Game
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
    </Container>
  );
};

export default Lobby;
