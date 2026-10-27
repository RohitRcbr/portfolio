import { Navbar, Nav } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

export default function Menu() {
  return (
    <Navbar.Collapse id="main-navbar">
      <Nav className="me-auto navigation onepage">
        <Nav.Link as={HashLink} className="nav-link-click" smooth to="#about">About</Nav.Link>
        <Nav.Link as={HashLink} className="nav-link-click" smooth to="#resume">Resume</Nav.Link>
        <Nav.Link as={HashLink} className="nav-link-click" smooth to="#skills">Skills</Nav.Link>
        <Nav.Link as={HashLink} className="nav-link-click" smooth to="#works">Projects</Nav.Link>
        <Nav.Link as={HashLink} className="nav-link-click" smooth to="#contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  );
}