
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Nav, Navbar, NavItem, Button} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {connect} from 'react-redux';
import {handleLogoutAction} from '../../../actions/authedUser';
import {withRouter} from 'react-router-dom'

class NavigationBar extends Component {
    constructor(props){
        super(props);
        this.submitLogout = this.submitLogout.bind(this);
    }
    submitLogout() {
        this.props.dispatch(handleLogoutAction());
        this.props.history.push("/");
    }
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to={'/'}>TrackDev</Link>
                    </Navbar.Brand>
                </Navbar.Header>
            {
            this.props.notLogged === true ?
                <Nav pullRight>
                    <LinkContainer to="/login">
                        <NavItem eventKey={1}>Login</NavItem>
                    </LinkContainer>
                </Nav>
                :
                <Navbar.Collapse>
                    <Navbar.Form pullRight>
                        <Button onClick={this.submitLogout}>Logout</Button>
                    </Navbar.Form>
                    <Navbar.Text pullRight>
                        Hello,
                        <Navbar.Link href="/">{this.props.username}</Navbar.Link>
                    </Navbar.Text>
                    <Nav pullRight>
                        <LinkContainer to="/users">
                            <NavItem eventKey={1}>Users</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>

            }
            </Navbar>
        )
    }
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

export default connect(mapStateProps)(withRouter(NavigationBar))