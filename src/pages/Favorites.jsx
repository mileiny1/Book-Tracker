import React from "react";
import BookList from "../components/BookList";

function Favorites({ books, toggleFavorite, removeBook, openEditModal }) {
  const favoriteBooks = books.filter((b) => b.favorite);

  return (
    <div>
      <h1 className="text-center mb-4">❤️ Favorite Books</h1>
      <BookList
        books={favoriteBooks}
        toggleFavorite={toggleFavorite}
        removeBook={removeBook}
        openEditModal={openEditModal}
      />
    </div>
  );
}

export default Favorites;
