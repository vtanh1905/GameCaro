import React from 'react';
import { Container, Card, Button, Form } from 'react-bootstrap';

const Login = () => {
  return (
    <Container>
      <Card className="card mt-5" style={{ width: '25rem' }}>
        <Card.Header className="font-weight-bold">Đăng nhập</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Mật khẩu" />
            </Form.Group>
            <Button variant="primary" style={{ width: '7rem' }} type="submit">
              Đăng Nhập
            </Button>
            <span> </span>
            <Button variant="danger" style={{ width: '7rem' }} type="submit">
              Đăng Ký
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
