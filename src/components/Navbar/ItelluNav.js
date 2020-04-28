import React, { useState } from "react";
import "./ItelluNav.css";

import logo from "../../files/logo.bmp";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const styles = {
  itelluNav: {
    backgroundColor: "#f4f4f4",
  },
  toggler: {
    color: "#224e8b",
    backgroundColor: "#5889a9",
    width: 44,
    height: 44,
  },
};

const image = {
  style: {
    maxWidth: 64,
    maxHeight: 64,
  },
};

const ItelluNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="col px-0">
      <Navbar expand="md" style={styles.itelluNav}>
        <Navbar.Brand href="/">
          <img src={logo} alt="itellu" style={image.style} />
        </Navbar.Brand>

        <Navbar.Toggle onClick={toggle} style={styles.toggler}>
          <div id="menuToggle">
            <input type="checkbox" />

            <span></span>
            <span></span>
            <span></span>
          </div>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto mx-auto">
            <NavDropdown title="Themen" id="basic-nav-dropdown">
              <NavDropdown.Item>Thema 1</NavDropdown.Item>
              <NavDropdown.Item>Thema 2</NavDropdown.Item>
              <NavDropdown.Item>Thema 3</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Über Uns" id="basic-nav-dropdown">
              <NavDropdown.Item>Vision</NavDropdown.Item>
              <NavDropdown.Item>Unsere Arbeit</NavDropdown.Item>
              <NavDropdown.Item>Geschichte</NavDropdown.Item>
              <NavDropdown.Item>Kollaboration</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/">Service</Nav.Link>

            <Nav.Link href="/">Kontakt</Nav.Link>
          </Nav>

          <Nav className="aboLogin ml-auto" navbar>
            <Nav.Link href="/">Abo</Nav.Link>

            <Nav.Link href="/">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default ItelluNav;
