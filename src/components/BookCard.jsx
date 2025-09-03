import React from "react";
import { Card, Button } from "react-bootstrap";

function BookCard({ book, toggleFavorite, removeBook, openEditModal }) {
  return (
    <Card className="shadow-sm h-100">
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{book.author}</Card.Subtitle>
        <Card.Text>
          📖 {book.genre} <br />
          ⭐ {book.rating} <br />
          📝 {book.notes}
        </Card.Text>
        <Button
          variant={book.favorite ? "danger" : "outline-danger"}
          size="sm"
          className="me-2"
          onClick={() => toggleFavorite(book.id)}
        >
          {book.favorite ? "❤️ Favorite" : "♡ Favorite"}
        </Button>
        <Button
          variant="warning"
          size="sm"
          className="me-2"
          onClick={() => openEditModal(book)}
        >
          ✏️ Edit
        </Button>
        <Button
          variant="danger"
          size="sm"
          onClick={() => removeBook(book.id)}
        >
          🗑 Remove
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BookCard;
