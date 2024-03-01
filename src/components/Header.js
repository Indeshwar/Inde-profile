import Offcanvas from "react-bootstrap/Offcanvas";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UseSelector, useDispatch, useSelector} from "react-redux";
import { handleShowOffcanvas, handleCloseOffcanvas } from "../reduxfeature/showSlice";
import Menubar from "./Menubar";
import './style.css';
import profileImage from '../images/indesh.jpg'
const Header = () => {
  
  const show = useSelector((state)=> state.show.value)
  const dispatch = useDispatch();

  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#home">
           <div className="container">
           <img src={profileImage} alt="profileImage" className="brand-frame img-content" />
            <h2 className="h2-content">Indeshwar</h2>
           </div>
            
            
          </Navbar.Brand>
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
            className="offcanvas-start toggle-navbar text-bg-secondary"
            tabIndex="-1"
            
          >
            <Offcanvas.Header closeButton className="text-bg-grey ">
              <Offcanvas.Title>Indeshwar</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Menubar/>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
