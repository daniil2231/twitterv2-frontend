import React from "react";
import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import AuthServices from "../services/AuthServices";
import { useNavigate } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const { username, password } = user;

  let navigate = useNavigate();
  const [show, setShow] = useState(false);
  // const [loading, setLoading] = useState(false);

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // FOR WHEN LOGIN IS FINISHED
    // AuthServices.login(user).then((response) => {
    //   console.log(response);
    //   const accessToken = response.accessToken;
    //   const role = response.role;
    //   if (role === "user") {
    //     navigate("/feed");
    //   } else if (role === "moderator") {
    //     navigate("/mod");
    //   } else if (role === "admin") {
    //     navigate("/admin");
    //   }
    // });

    AuthServices.login(username).then((response) => {
      console.log(response);
      //const accessToken = response.accessToken;
      const role = response.role;
      if (role === "user") {
        navigate("/feed");
      } else if (role === "moderator") {
        navigate("/mod");
      } else if (role === "admin") {
        navigate("/admin");
      }
    });
  };

  return (
    <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
      {/* Header */}
      <img className="img-thumbnail mx-auto d-block mb-2" alt="logo" />
      <div className="h4 mb-2 text-center">Sign In</div>
      {/* ALert */}
      {show ? (
        <Alert
          className="mb-2"
          variant="danger"
          onClose={() => setShow(false)}
          dismissible
        >
          Incorrect username or password.
        </Alert>
      ) : (
        <div />
      )}
      <Form.Group className="mb-2" controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control
          name="username"
          type="text"
          value={username}
          placeholder="Username"
          onChange={onInputChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-2" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          value={password}
          placeholder="Password"
          onChange={onInputChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-2" controlId="checkbox">
        <Form.Check type="checkbox" label="Remember me" />
      </Form.Group>
      <Button className="w-100" variant="primary" type="submit">
        Log In
      </Button>
      <div className="d-grid justify-content-end">
        <Button
          className="text-muted px-0"
          variant="link"
          onClick={() => navigate("/register")}
        >
          No account yet? Register here!
        </Button>
      </div>
    </Form>
  );
}

export default Login;
