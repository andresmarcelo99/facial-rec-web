import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      className="form-modal"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="login-form">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function LoginModal() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <Button
        variant="dark"
        style={{ marginBottom: "0.5em" }}
        className="login-btn"
        onClick={() => setModalShow(true)}
      >
        Login here!
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}
