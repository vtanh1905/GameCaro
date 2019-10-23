import React from 'react';
import { Container, Card, Button, Form, Alert } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Login = props => {
  const { handleLogin, errorLogin, user } = props;
  let history = useHistory();

  if (user !== null) {
    history.push('/');
  }

  const handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    const check = await handleLogin({
      email: email.value,
      password: password.value
    });
    if (check) {
      history.push('/');
    }
  };

  const handleGoToRegister = () => {
    history.push('/register');
  };

  const renderNotify = msg => {
    if (msg !== '') {
      return <Alert variant="danger">{msg}</Alert>;
    }
  };

  return (
    <Container>
      <Card className="card mt-5" style={{ width: '25rem' }}>
        <Card.Header className="font-weight-bold">Đăng nhập</Card.Header>
        <Card.Body>
          {renderNotify(errorLogin)}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Email" name="email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Mật khẩu"
                name="password"
              />
            </Form.Group>
            <Button variant="primary" style={{ width: '7rem' }} type="submit">
              Đăng Nhập
            </Button>
            <span> </span>
            <Button
              variant="danger"
              style={{ width: '7rem' }}
              type="submit"
              onClick={handleGoToRegister}
            >
              Đăng Ký
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
