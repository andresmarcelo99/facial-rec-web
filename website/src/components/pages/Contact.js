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
            <div style={{ color: "red", fontSize: "2vh" }}>
              {" Porfavor llenar todos los campos e ingresar correo valido"}
            </div>
          )}
          <hr />
          <Form className="contact-form">
            <Form.Group
              className="form-group-contact"
              controlId="formBasicName"
            >
              <Form.Label>Name</Form.Label>
              <Form.Control
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter your name"
              />
            </Form.Group>
            <Form.Group
              className="form-group-contact"
              controlId="formBasicEmail"
            >
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group
              className="form-group-contact"
              controlId="formBasicCompany"
            >
              <Form.Label>Company</Form.Label>
              <Form.Control
                onChange={(e) => setCompany(e.target.value)}
                type="text"
                placeholder="Enter your company"
              />
            </Form.Group>
            <Form.Group
              className="form-group-contact"
              controlId="formBasicPhoneNumber"
            >
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                onChange={(e) => setPhoneNumber(e.target.value)}
                type="text"
                placeholder="Enter your phone number"
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
