import React, { Component } from "react";
import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export class RegisterPage extends Component {
  render() {
    return (
      <div className="register-page">
        <Link to="/">
          {" "}
          <Button
            style={{
              background: "transparent",
              borderColor: "#9615db",
              color: "white",
            }}
            className="home-btn"
          >
            Home
          </Button>
        </Link>
        <div className="register-div-form">
          <Form className="register-form">
            <Form.Group>
              <Form.Label className="register-labels">Name</Form.Label>
              <Form.Control
                style={{
                  background: "transparent",
                  color: "white",
                  borderColor: "rgba(255, 255, 255, 0.30)",
                }}
                type="text"
                placeholder="Enter full name"
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="register-labels">Email address</Form.Label>
              <Form.Control
                style={{
                  background: "transparent",
                  color: "white",
                  borderColor: "rgba(255, 255, 255, 0.30)",
                }}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="register-labels">
                Enter the name of the company
              </Form.Label>
              <Form.Control
                style={{
                  background: "transparent",
                  color: "white",
                  borderColor: "rgba(255, 255, 255, 0.30)",
                }}
                type="text"
                placeholder="Company name"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label className="register-labels">Password</Form.Label>
              <Form.Control
                style={{
                  background: "transparent",
                  color: "white",
                  borderColor: "rgba(255, 255, 255, 0.30)",
                }}
                type="password"
                placeholder="Password"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label className="register-labels">
                Confirm your password
              </Form.Label>
              <Form.Control
                style={{
                  background: "transparent",
                  color: "white",
                  borderColor: "rgba(255, 255, 255, 0.30)",
                }}
                type="password"
                placeholder="Password"
              />
            </Form.Group>

            <Button
              style={{
                background: "#9615db",
                borderColor: "#9615db",
                borderRadius: "10px",
                margin: "1vh",
              }}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default RegisterPage;
