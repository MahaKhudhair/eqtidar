import React from "react"
import './nav.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import logo_img from '../assets/logo/logo_light.png';
import { Button } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";

export default function TopNavbar(){

return (
    <Navbar collapseOnSelect expand="lg"  variant="dark">
  <Container>
  <Navbar.Brand href="#home"><img src={logo_img} alt="logo"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
     <Nav className="me-auto m-auto " >
      <Nav.Link href="#appraisal" className="me-5" >تقييم عقاري</Nav.Link>
      <NavDropdown title="العقارات" id="collasible-nav-dropdown" className="me-5">
        <NavDropdown.Item href="#buy">شراء</NavDropdown.Item>
        <NavDropdown.Item href="#rent">ايجار</NavDropdown.Item>
        <NavDropdown.Item href="#sell">بيع</NavDropdown.Item>
       </NavDropdown>
      <Nav.Link href="#management" className="me-5">إدارة الاملاك</Nav.Link>
      <Nav.Link href="#about_us" className="me-5">من نحن</Nav.Link>
    </Nav>
    <Nav>
    <ButtonGroup aria-label="Basic example">
  <Button  href="#log_in" className="me-2" variant="dark">تسجيل دخول</Button>
  <Button  href="#sing_up" className="me-2" variant="light">انشاء حساب</Button>
  </ButtonGroup>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
)


}