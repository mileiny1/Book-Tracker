import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

function BookForm({ addBook }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author) return;
    addBook({ title, author, genre, rating, notes });
    setTitle(""); setAuthor(""); setGenre(""); setRating(""); setNotes("");
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Row>
        <Col md={2}>
          <Form.Control
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Col>
        <Col md={2}>
          <Form.Control
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </Col>
        <Col md={2}>
          <Form.Control
            placeholder="Genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </Col>
        <Col md={2}>
          <Form.Control
            type="number"
            placeholder="Rating (1-5)"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </Col>
        <Col md={2}>
          <Form.Control
            placeholder="Notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </Col>
        <Col md={2}>
          <Button type="submit" variant="primary" className="w-100">
            ➕ Add Book
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default BookForm;
