import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

function EditBookModal({ show, handleClose, currentBook, setCurrentBook, handleEditSave }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {currentBook && (
          <>
            <Form.Control
              className="mb-2"
              placeholder="Title"
              value={currentBook.title}
              onChange={(e) =>
                setCurrentBook({ ...currentBook, title: e.target.value })
              }
            />
            <Form.Control
              className="mb-2"
              placeholder="Notes"
              value={currentBook.notes}
              onChange={(e) =>
                setCurrentBook({ ...currentBook, notes: e.target.value })
              }
            />
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleEditSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditBookModal;
