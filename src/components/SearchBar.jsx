import React from "react";
import { Form } from "react-bootstrap";

function SearchBar({ search, setSearch }) {
  return (
    <Form.Control
      type="text"
      placeholder="Search books..."
      className="mb-3"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;
