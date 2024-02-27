import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {

  const [show, setShow] = useState(false);
  const handleCloseOffcanvas =()=>{
    setShow(false)
  }

  const handleShowOffcanvas=()=>{
    setShow(true)
  }

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand href="#home">Indeshwar</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleShowOffcanvas}/>
          <Navbar.Offcanvas show={show} onHide={handleCloseOffcanvas}
            className="offcanvas-start text-bg-dark"
            tabindex="-1"
          >

            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Indeshwar</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="bg-dark">
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/" onClick={handleCloseOffcanvas} >Home</Nav.Link>
                <Nav.Link as={Link} to="/services" onClick={handleCloseOffcanvas}>Services</Nav.Link>
                <Nav.Link as={Link} to="/portfolio" onClick={handleCloseOffcanvas}>Portfolio</Nav.Link>
                <Nav.Link as={Link} to="/contact" onClick={handleCloseOffcanvas}>Contact</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
