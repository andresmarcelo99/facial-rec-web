import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import ErrorAlert from "../Alerts";

import { connect } from "react-redux";
import { addClient } from "../../actions/clientActions";

export class RegisterPage extends Component {
  state = {
    user: uuidv4(),
    name: "",
    email: "",
    phone: "",
    password: "",
    password2: "",
    alert: false,
  };

  onSubmit = (e) => {
    const newClient = {
      user: this.state.user,
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      password: this.state.password,
      password2: this.state.password2,
    };
    console.log(newClient);
    this.props.addClient(newClient);
  };

  change = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.client !== this.props.client) {
      if (this.props.client.alert) {
        this.setState({ alert: true });
      }
    }
  }

  render() {
    if (this.props.client.curr === "registered" && !this.props.client.alert) {
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
              Inicio
            </Button>
          </Link>
          {/* this.props.client.alert */}
          {this.state.alert && <ErrorAlert err={this.props.client.errorType} />}

          <div className="register-div-form">
            <Form onSubmit={this.onSubmit} className="register-form">
              <Form.Group>
                <Form.Label className="register-labels">Nombre</Form.Label>
                <Form.Control
                  name="name"
                  style={{
                    background: "transparent",
                    color: "white",
                    borderColor: "rgba(255, 255, 255, 0.30)",
                  }}
                  type="text"
                  placeholder="Ingrese nombre completo"
                  onChange={(e) => this.change(e)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="register-labels">
                  Correo Electronico
                </Form.Label>
                <Form.Control
                  name="email"
                  style={{
                    background: "transparent",
                    color: "white",
                    borderColor: "rgba(255, 255, 255, 0.30)",
                  }}
                  type="email"
                  placeholder="Ingrese correo electronico"
                  onChange={(e) => this.change(e)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="register-labels">Tefono</Form.Label>
                <Form.Control
                  name="phone"
                  style={{
                    background: "transparent",
                    color: "white",
                    borderColor: "rgba(255, 255, 255, 0.30)",
                  }}
                  type="text"
                  placeholder="Ingrese telefono"
                  onChange={(e) => this.change(e)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="register-labels">
                  Ingrese el nombre de la empresa
                </Form.Label>
                <Form.Control
                  name="company"
                  style={{
                    background: "transparent",
                    color: "white",
                    borderColor: "rgba(255, 255, 255, 0.30)",
                  }}
                  type="text"
                  placeholder="Nombre de la empresa"
                  onChange={(e) => this.change(e)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label className="register-labels">Contraseña</Form.Label>
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
                  La contraseña debe tener minimo 6 caracteres
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword2">
                <Form.Label className="register-labels">
                  Confirme la contraseña
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
                Registrar
              </Button>
            </Form>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  client: state.client,
});

export default connect(mapStateToProps, { addClient })(
  withRouter(RegisterPage)
);
