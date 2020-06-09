import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "./logo.svg";

export class NavBar extends Component {
  render() {
    return (
      <Navbar
        className="navbar"
        collapseOnSelect
        expand="md"
        bg="#2D3032"
        variant="dark"
      >
        <Navbar.Brand className="navbar-brand" href="#home">
          <img
            alt="loguito"
            src={logo}
            width="50"
            height="50"
            className="nav-logo"
          />
          SID
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link className="nav-links" as={Link} to="/">
              Features
            </Nav.Link> */}
            <Nav.Link className="nav-links" as={Link}>
              Precios
            </Nav.Link>
            <Nav.Link className="nav-links" as={Link}>
              Demo
            </Nav.Link>
            <Nav.Link className="nav-links" as={Link}>
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
