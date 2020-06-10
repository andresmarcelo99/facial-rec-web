import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export const InfoModal = (props) => {
  const [show, setShow] = useState(props.show);

  let style = { color: "black", background: "transparent", border: "none" };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  if (show) {
    return (
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Success</Modal.Title>
          </Modal.Header>
          <Modal.Body>Tu forma se ha enviado!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
  return (
    <div>
      <Button variant="light" style={style} onClick={() => handleShow()}>
        Display Msg
      </Button>
    </div>
  );
};

export default InfoModal;
