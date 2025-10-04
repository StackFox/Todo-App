import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function NavBar({ isDarkMode, toggleDarkMode }) {
  return (
    <>
      <Navbar bg={isDarkMode ? "dark" : "light"} data-bs-theme={isDarkMode ? "dark" : "light"}>
        <Container>
          <Navbar.Brand as={NavLink} to="/">Todo App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/features">Features</Nav.Link>
            <Nav.Link as={NavLink} to="/pricing">Pricing</Nav.Link>
          </Nav>
          <button
            onClick={() => toggleDarkMode((prev) => !prev)}
            className="btn btn-secondary"
          >
            {isDarkMode ? "☀️" : "🌙"}
          </button>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;