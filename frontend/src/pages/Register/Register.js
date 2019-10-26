import React from 'react';
import { Container, Card, Button, Form, Alert } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Register = props => {
  const { handleRegister, errorRegister } = props;

  const history = useHistory();

  if (JSON.parse(localStorage.getItem('token')) !== null) {
    history.push('/');
  }

  const handleSubmit = async event => {
    event.preventDefault();
    const { email, password, fullname } = event.target.elements;
    const check = await handleRegister({
      email: email.value,
      password: password.value,
      fullname: fullname.value
    });
    if (check) {
      history.push('/login');
    }
  };

  const renderNotify = msg => {
    if (msg !== '') {
      return <Alert variant="danger">{msg}</Alert>;
    }
  };

  const handleBack = () => {
    history.push('/login');
  };

  return (
    <Container>
      <Card className="card mt-5" style={{ width: '25rem' }}>
        <Card.Header className="font-weight-bold">Đăng ký</Card.Header>
        <Card.Body>
          {renderNotify(errorRegister)}
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control type="email" placeholder="Email" name="email" />
            </Form.Group>

            <Form.Group>
              <Form.Control
                type="password"
                placeholder="Mật khẩu"
                name="password"
              />
            </Form.Group>

            {/* <Form.Group>
                <Form.Control
                  type="password"
                  placeholder="Nhập lại mật khẩu"
                  name="repassword"
                  value={repassword}
                  onChange={this.handleInputChange}
                />
              </Form.Group> */}

            <Form.Group>
              <Form.Control type="text" placeholder="Họ tên" name="fullname" />
            </Form.Group>

            <Button variant="danger" style={{ width: '7rem' }} type="submit">
              Xác nhận
            </Button>
            <span> </span>
            <Button
              variant="secondary"
              style={{ width: '7rem' }}
              type="button"
              onClick={handleBack}
            >
              Hủy
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Register;
