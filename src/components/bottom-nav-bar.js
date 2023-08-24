import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import BottomNavBarImage1 from './icon-facebook.svg';
import BottomNavBarImage2 from './icon-twitter.svg';

function BottomNavBar() {
  return (
    <Navbar collapseOnSelect bg='dark' data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href='#contact'>Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#facebook" >
                <img src={BottomNavBarImage1} alt="Facebook" id='bottomNavBarFacebook'/>
            </Nav.Link>
            <Nav.Link href="#twitter">
                <img src={BottomNavBarImage2} alt="Twitter" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BottomNavBar;