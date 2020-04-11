import React, { useState } from "react";
import "./ItelluNav.css";

import logo from "../../files/logo.bmp";

import {
  Media,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

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
  path: "./favicon.ico",
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
        <NavbarBrand href="/">
          <Media object src={logo} alt="itellu" style={image.style} />
        </NavbarBrand>

        <NavbarToggler onClick={toggle} style={styles.toggler}>
          <div id="menuToggle">
            <input type="checkbox" />

            <span></span>
            <span></span>
            <span></span>
          </div>
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto mx-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Themen
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Thema 1</DropdownItem>
                <DropdownItem>Thema 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Thema 3</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Über Uns
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Vision</DropdownItem>
                <DropdownItem>Unsere Arbeit</DropdownItem>
                <DropdownItem>Geschichte</DropdownItem>
                <DropdownItem>Kollaboration</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <NavItem>
              <NavLink href="/">Service</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/">Kontakt</NavLink>
            </NavItem>
          </Nav>

          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Abo</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/">Login</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default ItelluNav;
