import React from 'react';
import {Link} from 'react-router-dom';
import {Nav, Navbar, NavItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

export default () => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to={'/'}>Home</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
          <LinkContainer to="/users">
              <NavItem eventKey={1}>Users</NavItem>
          </LinkContainer>
        <LinkContainer to="/login">
          <NavItem eventKey={1}>Login</NavItem>
        </LinkContainer>
          <LinkContainer to="/register/13456">
              <NavItem eventKey={1}>Register-test</NavItem>
          </LinkContainer>

      </Nav>
    </Navbar>
  );
}