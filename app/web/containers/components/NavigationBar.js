import React from 'react';
import {Link} from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default ()=> {
    return (
      <Navbar>
          <Navbar.Header>
              <Navbar.Brand>
                  <Link to={'/'}>Home</Link>
              </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
              <LinkContainer to="/login">
                <NavItem eventKey={1}>Login</NavItem>
              </LinkContainer>
          </Nav>
      </Navbar>
    );
}