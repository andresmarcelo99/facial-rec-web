import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";

import ErrorAlert from "../Alerts";

import { connect } from "react-redux";
import { addClient } from "../../actions/clientActions";

export class RegisterPage extends Component {
  state = {
    name: "",
    email: "",
    company: "",
    password: "",
    password2: "",
    logged: false,
    alert: false,
  };

  onSubmit = (e) => {
    const newClient = {
      name: this.state.name,
      email: this.state.email,
      company: this.state.company,
      password: this.state.password,
      password2: this.state.password2,
    };
    console.log(newClient);
    console.log(this.state.logged);
    this.props.addClient(newClient);
  };

  change = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    if (
      (this.state.logged || this.props.client.logged) &&
      !this.props.client.alert
    ) {
      console.log("logged");
      return <Redirect to="/" />;
    } else {
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
          {/* this.props.client.alert */}
          {this.state.alert && <ErrorAlert err={this.props.client.errorType} />}

          <div className="register-div-form">
            <Form onSubmit={this.onSubmit} className="register-form">
              <Form.Group>
                <Form.Label className="register-labels">Name</Form.Label>
                <Form.Control
                  name="name"
                  style={{
                    background: "transparent",
                    color: "white",
                    borderColor: "rgba(255, 255, 255, 0.30)",
                  }}
                  type="text"
                  placeholder="Enter full name"
                  onChange={(e) => this.change(e)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="register-labels">
                  Email address
                </Form.Label>
                <Form.Control
                  name="email"
                  style={{
                    background: "transparent",
                    color: "white",
                    borderColor: "rgba(255, 255, 255, 0.30)",
                  }}
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => this.change(e)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="register-labels">
                  Enter the name of the company
                </Form.Label>
                <Form.Control
                  name="company"
                  style={{
                    background: "transparent",
                    color: "white",
                    borderColor: "rgba(255, 255, 255, 0.30)",
                  }}
                  type="text"
                  placeholder="Company name"
                  onChange={(e) => this.change(e)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label className="register-labels">Password</Form.Label>
                <Form.Control
                  name="password"
                  style={{
                    background: "transparent",
                    color: "white",
                    borderColor: "rgba(255, 255, 255, 0.30)",
                  }}
                  type="password"
                  placeholder="Password"
                  onChange={(e) => this.change(e)}
                />
                <Form.Text className="text-muted">
                  Password must be between 6 and 30 characters
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword2">
                <Form.Label className="register-labels">
                  Confirm your password
                </Form.Label>
                <Form.Control
                  name="password2"
                  style={{
                    background: "transparent",
                    color: "white",
                    borderColor: "rgba(255, 255, 255, 0.30)",
                  }}
                  type="password"
                  placeholder="Password"
                  onChange={(e) => this.change(e)}
                />
              </Form.Group>

              <Button
                style={{
                  background: "#9615db",
                  borderColor: "#9615db",
                  borderRadius: "10px",
                  margin: "1vh",
                }}
                onClick={this.onSubmit}
              >
                Register
              </Button>
            </Form>
          </div>
        </div>
      );
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.client !== this.props.client) {
      if (this.props.client.logged) {
        this.setState({ logged: true });
      }
      if (this.props.client.alert) {
        this.setState({ alert: true });
      }
    }
  }
}

const mapStateToProps = (state) => ({
  client: state.client,
});

export default connect(mapStateToProps, { addClient })(RegisterPage);
