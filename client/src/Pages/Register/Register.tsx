import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./style.scss";

interface IProps {}

const Login: React.FC<IProps> = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="auth" style={{ height: "100vh" }}>
      <Container>
        <div className="form_auth">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="Enter Your Name" />
            </Form.Group>
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
                Already have an account <Link to="/login">Login</Link>
              </Form.Text>
            </div>
          </Form>
        </div>
      </Container>
    </div>
  );
};
export default Login;
