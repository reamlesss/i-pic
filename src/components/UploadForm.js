import { Modal, Button, Form } from "react-bootstrap";
import "./UploadForm.css";

function UploadForm() {
  return (
    <div
      className="modal show "
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog className="modal-dialog">
        <Modal.Header closeButton className="">
          <Modal.Title>📸 Upload your picture! 📸</Modal.Title>
        </Modal.Header>

        <Modal.Body className="modal-body">
          <h4>Give us some data 😉 💰</h4>
          <Form>
            <Form.Group controlId="formImage">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" accept="image/*"  className="image-input"/>
            </Form.Group>

            <Form.Group controlId="formLocation">
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" placeholder="Enter location" />
            </Form.Group>

            <Form.Group controlId="formDate">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>

            <Form.Group controlId="formEventDescription" className="">
              <Form.Label>Event Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter event description"
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer className="modal-footer d-flex justify-content-between">
          <Button variant="secondary" className="w-25">Close</Button>
          <Button variant="primary" className="upload-button w-50">
            Save changes
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}
export default UploadForm;
