import React from 'react';
import { Container, Card, Media } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Lobby = props => {
  let history = useHistory();
  const { user } = props;

  //Kiểm Tra Login chưa
  if (JSON.parse(localStorage.getItem('token')) === null) {
    history.push('/login');
    return <></>;
  } else {
    if (user === null) {
      return <></>;
    }
  }

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
            onClick={handlePlay}
          >
            Chơi Với Người
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-lg btn-block"
            onClick={handlePlay}
          >
            Chơi Với Máy
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
