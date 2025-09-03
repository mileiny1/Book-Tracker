import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";





function App() {
  const [books, setBooks] = useLocalStorage("books", []);

  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand as={Link} to="/"></Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/favorites">Favorites</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container>
        <Routes>
          <Route path="/" element={<Home books={books} setBooks={setBooks} />} />
          <Route path="/favorites" element={
            <Favorites
              books={books}
              toggleFavorite={(id) => setBooks(books.map(b => b.id === id ? { ...b, favorite: !b.favorite } : b))}
              removeBook={(id) => setBooks(books.filter(b => b.id !== id))}
              openEditModal={() => {}}
            />}
          />
        </Routes>
      </Container>
     
   <footer className="bg-dark text-light mt-auto py-3">
          <Container className="text-center">
            
            
            
            <p className="mt-2 mb-0">
              <small>&copy; {new Date().getFullYear()} Mileiny Nolasco</small>
            </p>
          </Container>
        </footer>
    
    </Router>
  );
}

export default App;
