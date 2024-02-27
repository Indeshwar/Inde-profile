import Offcanvas from "react-bootstrap/Offcanvas";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UseSelector, useDispatch, useSelector} from "react-redux";
import { handleShowOffcanvas, handleCloseOffcanvas } from "../reduxfeature/showSlice";
import Menubar from "./Menubar";
import './style.css';

const Header = () => {
  
  const show = useSelector((state)=> state.show.value)
  const dispatch = useDispatch();

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
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={()=>dispatch(handleShowOffcanvas())}
          />

          {/* if screen size large, display Nav Menubar */}
          <Navbar.Collapse id="responsive-navbar-nav" className="menu-navbar">
            <Menubar/>
          </Navbar.Collapse>

          {/* if screen is small, display Toggle Menubar */}
          <Navbar.Offcanvas
            show={show}
            onHide={()=>dispatch(handleCloseOffcanvas())}
            className="offcanvas-start text-bg-dark toggle-navbar"
            tabIndex="-1"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Indeshwar</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="bg-dark">
              <Menubar/>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
