import React, { useState, useEffect } from "react";
 import { Link } from "react-router-dom";
import {Navbar, NavDropdown, Nav, Container} from 'react-bootstrap';
const Header = () => {
return (
    <div>
        <Navbar bg="secondary" color="yellow" expand="lg" variant="dark">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <li class="nav-item">
        <Link class="nav-link" to="/"> Home </Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to="/login"> Login </Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to="/student/list"> Student List </Link>
        </li>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <li><Link class="dropdown-item" to="/signup"> SignUp </Link></li>
          <li><Link class="dropdown-item" to="/display/image"> Image Display </Link></li>
          <li><Link class="dropdown-item" to="/add/course"> Add Course </Link></li>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
)
}

export default Header;