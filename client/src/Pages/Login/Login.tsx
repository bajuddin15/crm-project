import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./style.scss";

interface IProps {}

const Login: React.FC<IProps> = () => {
  return (
    <div className="auth" style={{ height: "100vh" }}>
      <Container>
        <div className="form_auth">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>

            <div>
              <Form.Text className="text-muted mt-3">
                Create a new account <Link to="/register">Register</Link>
              </Form.Text>
            </div>
          </Form>
        </div>
      </Container>
    </div>
  );
};
export default Login;
