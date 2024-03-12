import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleShowOffcanvas, handleCloseOffcanvas } from "../reduxfeature/showSlice";

function Menubar() {
  const show = useSelector((state)=>state.show.value);
  const dispatch = useDispatch();
  return (
    <>
      <Nav className="justify-content-end flex-grow-1 pe-3">
        <Nav.Link active
          as={Link}
          to="/"
          onClick={() => dispatch(handleCloseOffcanvas())}
          className="d-inline-flex focus-ring focus-ring-success py-1 px-2 text-decoration-none  rounded-2"
        >
          About
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/portfolio"
          onClick={() => dispatch(handleCloseOffcanvas())}
          className="d-inline-flex focus-ring focus-ring-success py-1 px-2 text-decoration-none  rounded-2"
        >
          Portfolio
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/skills"
          onClick={() => dispatch(handleCloseOffcanvas())}
          className="d-inline-flex focus-ring focus-ring-success py-1 px-2 text-decoration-none  rounded-2"
        >
          Skills
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/resume"
          onClick={() => dispatch(handleCloseOffcanvas())}
          className="d-inline-flex focus-ring focus-ring-success py-1 px-2 text-decoration-none  rounded-2"
        >
          Resume
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/contact"
          onClick={() => dispatch(handleCloseOffcanvas())}
          className="d-inline-flex focus-ring focus-ring-success py-1 px-2 text-decoration-none  rounded-2"
        >
          Contact
        </Nav.Link>
      </Nav>
    </>
  );
}

export default Menubar;
