/* eslint-disable jsx-a11y/heading-has-content */
import { Button, Form } from "react-bootstrap";
import "./UploadForm.css";
import { useState } from "react";
import { FaUpload, FaCheckCircle } from "react-icons/fa";

function UploadForm() {
  const [fileUploaded, setFileUploaded] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileUploaded(!!file);
  };

  return (
    <div className="d-flex justify-content-center align-items-center  flex-column mt-5 mb-5">
      <div className="upload-container">
        <h2 className="upload-title text-center fw-bold">
          Upload your picture!
        </h2>
        <h4 className="upload-subtitle text-center"></h4>
        <Form>
          <Form.Group controlId="formLocation">
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" placeholder="Enter location" />
          </Form.Group>

          <Form.Group controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" />
          </Form.Group>

          <Form.Group controlId="formEventDescription">
            <Form.Label>Event Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={1}
              placeholder="Enter event details (artist, name, etc.)"
            />
          </Form.Group>

          <Form.Group controlId="formImage" className="text-center">
            <div
              className={`custom-file-input mt-3 ${
                fileUploaded ? "file-selected" : ""
              }`}
            >
              <input
                type="file"
                accept="image/*"
                className="image-input"
                onChange={handleFileChange}
              />
              {fileUploaded ? (
                <FaCheckCircle className="upload-icon success" />
              ) : (
                <FaUpload className="upload-icon" />
              )}
            </div>
          </Form.Group>

          <div className="form-buttons d-flex flex-column align-items-center mt-4 gap-3">
            <Button variant="primary" className="upload-button w-100">
              Save changes
            </Button>
            <Button variant="secondary" className="w-100">
              Cancel
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default UploadForm;
