import React, { useState } from 'react';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { Button, Card, Form } from 'react-bootstrap';

export const Register = () => {
  const googleAuth = () => {
    window.open(
      `http://localhost:8800/auth/google/callback`,
      "_self"
    );
  };

  const navigate = useNavigate();
  const [values, setValues] = useState({ email: "", username: "", password: "" });

  const generateError = (error) => {
    if (error.trim() !== "") {
      toast.error(error, {
        position: "bottom-right",
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8800/register",
        { ...values },
        { withCredentials: true }
      );
      if (data) {
        if (!data.created) {
          // Handle registration errors
          const { errors } = data;
          Object.values(errors).forEach((error) => generateError(error));
        } else {
          navigate("/");
        }
      }
    } catch (ex) {
      console.log(ex);
      generateError("An error occurred while registering");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <Card style={{ textAlign: 'center', padding: '30px' }}>
        <Card.Body>
          <h4>Register</h4>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email"
                placeholder="Enter email"
                value={values.email}
                onChange={(e) => setValues({ ...values, email: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control 
                type="text"
                placeholder="Enter username"
                value={values.username}
                onChange={(e) => setValues({ ...values, username: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password"
                placeholder="Password"
                value={values.password}
                onChange={(e) => setValues({ ...values, password: e.target.value })}
              />
            </Form.Group>
            <Button
              variant="success"
              type="submit"
              className="mt-2"
            >
              Register
            </Button>
            <br />
            <Button
              onClick={googleAuth}
              variant="success"
              className="mt-2"
            >
              Sign in with Google
            </Button>
            <p className="mt-2">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </Form>
        </Card.Body>
      </Card>
      <ToastContainer />
    </div>
  );
};
