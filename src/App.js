import React, { useState } from "react";
import {
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
  NavbarText,
  Form,
  FormText,
} from "reactstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "./drawable/logo.svg";
import "./App.css";
import ProfileLiff from "./page/ProfileLiff";

const liff = window.liff;

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        {/* <NavbarBrand href="/">reactstrap</NavbarBrand> */}
        <NavbarBrand href="/profileLiff" className="App">
          <img
            alt=""
            src={logo}
            width="46"
            height="46"
            className="d-inline-block align-top"
          />{" "}
          Staff Pay slip
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <LinkContainer to="/">
              <NavLink>Home</NavLink>
            </LinkContainer>
            <NavItem>
              <NavLink href="https://line.me">Open Window</NavLink>
            </NavItem>
            <LinkContainer to="/about">
              <NavLink>About</NavLink>
            </LinkContainer>
          </Nav>
          <LinkContainer to="/profileLiff">
            <NavLink>Logout</NavLink>
          </LinkContainer>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default App;
