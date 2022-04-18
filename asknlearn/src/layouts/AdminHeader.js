import React, { useState, useEffect } from "react";
 import { Link } from "react-router-dom";
import {Navbar, NavDropdown, Nav, Container} from 'react-bootstrap';
const AdminHeader = () => {
  var uid = "";
  if(localStorage.getItem('user')){
    var obj = JSON.parse(localStorage.getItem('user'));
    uid=obj.userId;
  }
return (
    <div>
        <Navbar bg="secondary" color="yellow" expand="lg" variant="dark">
  <Container>
    <Navbar.Brand href="/">Ask N Learn </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">

        <li class="nav-item">
        <Link class="nav-link" to="/admin/profile/"> Profile </Link>
        </li>
      

        <NavDropdown title="Users" id="basic-nav-dropdown">
          <li><Link class="dropdown-item" to="/users/list"> Users </Link></li>
          <li><Link class="dropdown-item" to="/admins/list"> Admins </Link></li>
          <li><Link class="dropdown-item" to="/moderators/list"> Moderators  </Link></li>
          <li><Link class="dropdown-item" to="/instructors/list"> Instructors  </Link></li>
          <li><Link class="dropdown-item" to="/learners/list"> Learners  </Link></li>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/pending/user">Pending Users</NavDropdown.Item>
        </NavDropdown>
        

        <li class="nav-item">
        <Link class="nav-link" to="/Course/List">Recent Courses</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to="/recent/post">Recent Posts</Link>
        </li>

        

        <li class="nav-item">
        <Link class="nav-link" to={"/logout/"+uid}>Logout</Link>
        </li>

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
)
}

export default AdminHeader;