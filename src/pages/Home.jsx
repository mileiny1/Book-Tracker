import React, { useState } from "react";
import BookForm from "../components/BookForm";
import BookList from "../components/BookList";
import SearchBar from "../components/SearchBar";
import EditBookModal from "../components/EditBookModal";

function Home({ books, setBooks }) {
  const [search, setSearch] = useState("");
  const [showEdit, setShowEdit] = useState(false);
  const [currentBook, setCurrentBook] = useState(null);

  const addBook = (book) => {
    setBooks([...books, { ...book, id: Date.now(), favorite: false }]);
  };

  const removeBook = (id) => {
    setBooks(books.filter((b) => b.id !== id));
  };

  const toggleFavorite = (id) => {
    setBooks(
      books.map((b) =>
        b.id === id ? { ...b, favorite: !b.favorite } : b
      )
    );
  };

  const openEditModal = (book) => {
    setCurrentBook(book);
    setShowEdit(true);
  };

  const handleEditSave = () => {
    setBooks(
      books.map((b) =>
        b.id === currentBook.id ? currentBook : b
      )
    );
    setShowEdit(false);
  };

  const filteredBooks = books.filter(
    (b) =>
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-center mb-4">📚 My Book Tracker</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <BookForm addBook={addBook} />
      <BookList
        books={filteredBooks}
        toggleFavorite={toggleFavorite}
        removeBook={removeBook}
        openEditModal={openEditModal}
      />
      <EditBookModal
        show={showEdit}
        handleClose={() => setShowEdit(false)}
        currentBook={currentBook}
        setCurrentBook={setCurrentBook}
        handleEditSave={handleEditSave}
      />
    </div>
  );
}

export default Home;
