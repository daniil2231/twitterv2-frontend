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
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    event.preventDefault();
    if (isChecked) {
      console.log("Form submitted");
    } else {
      alert("Please agree to the privacy policy.");
    }
  };

  const { username, password } = user;

  let navigate = useNavigate();

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    AuthServices.register(username, password).then((response) => {
      console.log(response);
      navigate("login");
    });
  };

  return (
    <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
      {/* Header */}
      <img className="img-thumbnail mx-auto d-block mb-2" alt="logo" />
      <div className="h4 mb-2 text-center">Sign Up</div>
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
      <div className="checkbox">
        <input
          type="checkbox"
          name="agreement"
          value="accepted"
          onChange={handleCheckboxChange}
          checked={isChecked}
        />
        I agree to the <a href="/privacyagreement">privacy policy</a>
      </div>
      <Button
        className="w-100"
        variant="primary"
        type="submit"
        disabled={!isChecked}
      >
        Register
      </Button>
      <div className="d-grid justify-content-end">
        <Button
          className="text-muted px-0"
          variant="link"
          onClick={() => navigate("/login")}
        >
          Already have an account? Login here!
        </Button>
      </div>
    </Form>
  );
}

export default Login;
