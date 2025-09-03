import React from "react";
import { Row, Col } from "react-bootstrap";
import BookCard from "./BookCard";

function BookList({ books, toggleFavorite, removeBook, openEditModal }) {
  return (
    <Row>
      {books.length === 0 ? (
        <p className="text-center">No books found.</p>
      ) : (
        books.map((book) => (
          <Col md={4} key={book.id} className="mb-4">
            <BookCard
              book={book}
              toggleFavorite={toggleFavorite}
              removeBook={removeBook}
              openEditModal={openEditModal}
            />
          </Col>
        ))
      )}
    </Row>
  );
}

export default BookList;
