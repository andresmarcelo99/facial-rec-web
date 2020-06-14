import React, { useState } from "react";
import { Alert, Button, Modal } from "react-bootstrap";

export default function ErrorAlert(props) {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (show) {
    return (
      <Modal className="alert-pop" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Oops hubo un error</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul className="errors-register" style={{ listStyle: "none" }}>
            {Object.keys(props.err).map((key) => (
              <li key={key}>{props.err[key]}</li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <Button
      className="error-reg-btn"
      style={{
        background: "transparent",
        color: "white",
        borderColor: "rgba(255, 0, 0, 0.65)",
        borderRadius: "10px",
      }}
      onClick={handleShow}
    >
      Mostrar
    </Button>
  );
}
