import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import axios from "axios";

import InfoModal from "../InfoModal";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [submited, setSubmitedModal] = useState(false);
  const [alert, setAlert] = useState(false);

  const submitContact = () => {
    const contact_form = {
      name,
      email,
      company,
      phoneNumber,
    };

    axios
      .post("/api/contact", contact_form)
      .then((res) => {
        setSubmitedModal(true);
      })
      .catch((err) => setAlert(true));

    console.log(contact_form);
  };

  return (
    <div className="contact-page">
      <Row className="contact-page-container">
        <Col style={{ color: "black" }}>
          <span>
            <NavLink className="contact-go-home-link" to="/">
              Home
            </NavLink>
          </span>
          <span>{submited && <InfoModal show={submited} />}</span>
          <div className="header-label-contact">Contactanos!</div>
          {alert && (
            <div style={{ color: "red", fontSize: "2vh", textAlign: "center" }}>
              {" Porfavor llenar todos los campos e ingresar correo valido"}
            </div>
          )}
          <Form className="contact-form">
            <Form.Group
              className="form-group-contact"
              controlId="formBasicName"
            >
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                style={{
                  background: "transparent",
                  color: "white",
                  borderColor: "rgba(255, 255, 255, 0.30)",
                }}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Ingrese su nombre"
              />
            </Form.Group>
            <Form.Group
              className="form-group-contact"
              controlId="formBasicEmail"
            >
              <Form.Label>Email address</Form.Label>
              <Form.Control
                style={{
                  background: "transparent",
                  color: "white",
                  borderColor: "rgba(255, 255, 255, 0.30)",
                }}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Ingrese email"
              />
            </Form.Group>

            <Form.Group
              className="form-group-contact"
              controlId="formBasicPhoneNumber"
            >
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                style={{
                  background: "transparent",
                  color: "white",
                  borderColor: "rgba(255, 255, 255, 0.30)",
                }}
                onChange={(e) => setPhoneNumber(e.target.value)}
                type="text"
                placeholder="Ingrese su numero de telefono"
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                style={{
                  background: "transparent",
                  color: "white",
                  borderColor: "rgba(255, 255, 255, 0.30)",
                }}
                onChange={(e) => setPhoneNumber(e.target.value)}
                type="text"
                placeholder="Mensaje"
              />
            </Form.Group>

            <Button
              style={{
                background: "#9615db",
                borderColor: "#9615db",
                borderRadius: "10px",
              }}
              onClick={submitContact}
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
