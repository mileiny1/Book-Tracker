import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import About from "./pages/About";

function App() {
  const [books, setBooks] = useLocalStorage("books", []);

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        {/* Navbar */}
        <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
          <Container>
            <Navbar.Brand as={Link} to="/">Book Tracker</Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/favorites">Favorites</Nav.Link>
              
            </Nav>
          </Container>
        </Navbar>

        {/* Page Content */}
        <Container className="flex-grow-1 mb-5">
          <Routes>
            <Route path="/" element={<Home books={books} setBooks={setBooks} />} />
            <Route
              path="/favorites"
              element={
                <Favorites
                  books={books}
                  toggleFavorite={(id) =>
                    setBooks(
                      books.map((b) =>
                        b.id === id ? { ...b, favorite: !b.favorite } : b
                      )
                    )
                  }
                  removeBook={(id) =>
                    setBooks(books.filter((b) => b.id !== id))
                  }
                  openEditModal={() => {}}
                />
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>

        {/* Sticky Footer */}
        <footer className="bg-dark text-light py-3 mt-auto">
          <Container className="text-center">
            <p className="mb-0">
              <small>&copy; {new Date().getFullYear()} Mileiny Nolasco</small>
            </p>
          </Container>
        </footer>
      </div>
    </Router>
  );
}

export default App;
