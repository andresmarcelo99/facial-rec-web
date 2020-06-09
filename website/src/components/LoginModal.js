import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { connect, useSelector, useDispatch } from "react-redux";
import axios from "axios";

import { logClient } from "../actions/clientActions";

function MyVerticallyCenteredModal(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const client = useSelector((state) => state.client);
  const dispatch = useDispatch();
  const [alert, setAlert] = useState(false);

  const submitClient = () => {
    const client_log = {
      email,
      password,
    };

    axios
      .post("/api/login", client_log)
      .then((res) => {
        dispatch({
          type: "LOGGIN",
          payload: res.data,
        });
        console.log("logged");
        console.log(res.data);
      })
      .catch((err) => {
        setAlert(true);
        console.log(err.response.data);
      });

    console.log(client_log);
  };

  return (
    <Modal
      {...props}
      className="form-modal"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Login
          {alert && (
            <div style={{ color: "red", fontSize: "2vh" }}>
              {" Incorrect email or password"}
            </div>
          )}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="login-form">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={submitClient}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function LoginModal() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <Button
        variant="dark"
        style={{ marginBottom: "0.5em" }}
        className="login-btn"
        onClick={() => setModalShow(true)}
      >
        Iniciar Sesion
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}
const mapStateToProps = (state) => ({
  client: state.client,
});

export default connect(mapStateToProps, { logClient })(LoginModal);
