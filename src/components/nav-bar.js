import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import BrandLogo from '../images/logo-bookmark.svg';
import './components.css';

function LandingPageNavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body navbar-main-body">
      <Container>
        <Navbar.Brand href="#home" className='brand-logo'>
            <img src={BrandLogo} alt="Brand Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='nav-links'>
            <Nav.Link href="#features" id='navFeaturesBtn'>
                <button className='navButton'>FEATURES</button>
            </Nav.Link>
            <Nav.Link  href="#contact" id='navContactBtn'>
                <button className='navButton'>CONTACT</button>
            </Nav.Link>
            <Nav.Link  href="#contact" id='navPricingBtn'>
                <button className="navButton">PRICING</button>
            </Nav.Link>
            <Nav.Link  href="#contact" id='navLoginBtn'>
                <button className="navButton">LOGIN</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default LandingPageNavBar;