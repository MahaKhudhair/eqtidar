import React from "react";
import "./nav.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import logo_img from "../../assets/logo/logo_light.png";
import { Button } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link, NavLink } from "react-router-dom";

export default function TopNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand href="#home">
            <img src={logo_img} alt="logo" />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto m-auto ">
            <LinkContainer to="/appraisal">
              <Nav.Link className="me-5">تقييم عقاري </Nav.Link>
            </LinkContainer>

            <NavDropdown
              title="العقارات"
              id="collasible-nav-dropdown"
              className="me-5"
            >
              <LinkContainer to="buy">
                <NavDropdown.Item>شراء</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="rent">
                <NavDropdown.Item>ايجار</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="sell">
                <NavDropdown.Item>بيع</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <LinkContainer to="management">
              <Nav.Link className="me-5">إدارة الاملاك</Nav.Link>
            </LinkContainer>
            <LinkContainer to="about-us">
              <Nav.Link className="me-5">من نحن</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            <ButtonGroup aria-label="Basic example">
              <Button href="#log_in" className="me-2" variant="dark">
                تسجيل دخول
              </Button>
              <Button href="#sing_up" className="me-2" variant="light">
                انشاء حساب
              </Button>
            </ButtonGroup>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
