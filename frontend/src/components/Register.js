import React from 'react';
import { Container, Card, Button, Form } from 'react-bootstrap';

const Register = () => {
  return (
    <Container>
      <Card className="card mt-5" style={{ width: '25rem' }}>
        <Card.Header className="font-weight-bold">Đăng ký</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Mật khẩu" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Nhập lại mật khẩu" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Họ tên" />
            </Form.Group>

            <Button variant="danger" style={{ width: '7rem' }} type="submit">
              Đăng Ký
            </Button>
            <span> </span>
            <Button variant="secondary" style={{ width: '7rem' }} type="submit">
              Hủy
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Register;
