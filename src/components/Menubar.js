import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UseSelector, useDispatch, useSelector } from "react-redux";
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
        >
          About
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/portfolio"
          onClick={() => dispatch(handleCloseOffcanvas())}
        >
          Portfolio
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/skills"
          onClick={() => dispatch(handleCloseOffcanvas())}
        >
          Skills
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/resume"
          onClick={() => dispatch(handleCloseOffcanvas())}
        >
          Resume
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/contact"
          onClick={() => dispatch(handleCloseOffcanvas())}
        >
          Contact
        </Nav.Link>
      </Nav>
    </>
  );
}

export default Menubar;
