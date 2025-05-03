import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navigation.css";

function Navigation({ setView }) {
  return (
    <Navbar expand="lg" className="bg-primary text-primary">
      <Container>
        <Navbar.Brand href="#home" onClick={() => setView("home")}>
          I-Pic
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => setView("browse")}>Browse</Nav.Link>
            <Nav.Link onClick={() => setView("upload")}>Upload</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
