import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import './PassRec.css'
import axios from "axios";

function Passrec() {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [email, setEmail] = useState("");

  const patchData = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:3002/email?email=${email}`)
    .then(res => console.log('Patching data', res))
    .catch(err=> console.log(err))
    handleClose();
  }

  return (
    <>
      <Button className="recbutton" variant="success" onClick={handleShow}>
        Forgot password?
      </Button>

  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter your email, please</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
            <br />
            <br />
          <Button className='closemodal' variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className="savechanges" variant="primary" onClick={patchData}>
            Send new password
          </Button>
        </Modal.Footer>
      </Modal>
      </>
  );
}

export default Passrec;