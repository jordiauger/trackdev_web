import React from 'react';
import {Link} from 'react-router-dom';
import {Nav, Navbar, NavItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {connect} from 'react-redux';

function NavigationBar({ notLogged, username }){
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to={'/'}>TrackDev</Link>
        </Navbar.Brand>
      </Navbar.Header>
        {
            notLogged === true ?
                <Nav pullRight>
                    <LinkContainer to="/login">
                        <NavItem eventKey={1}>Login</NavItem>
                    </LinkContainer>
                </Nav>
                :
                <Navbar.Collapse>
                    <Nav pullRight>
                        <Navbar.Text>
                            Hello,
                            <Navbar.Link href="/">{username}</Navbar.Link>
                        </Navbar.Text>
                    </Nav>
                    <Nav pullRight>
                        <LinkContainer to="/users">
                            <NavItem eventKey={1}>Users</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            }
    </Navbar>
  );
}
/*

 <Nav pullRight>
 {
 notLogged === true ?
 <LinkContainer to="/login">
 <NavItem eventKey={1}>Login</NavItem>
 </LinkContainer>
 :
 <LinkContainer to="/users">
 <NavItem eventKey={1}>Users</NavItem>
 </LinkContainer>
 }
 </Nav>
 */
function mapStateProps ({ authedUser }) {
    let username;
    authedUser ? username =  authedUser.name : null;
    return {
        notLogged: authedUser === null,
        username: username
    }
}

export default connect(mapStateProps)(NavigationBar)