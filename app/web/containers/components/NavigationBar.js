
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Collapse, Nav, Navbar, NavbarBrand, NavItem, NavLink, Button} from 'reactstrap'
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
    }
    render() {
        return (
            <Navbar>
                <NavbarBrand href="/">
                    TrackDev
                </NavbarBrand>
            {
            this.props.notLogged === true ?
                <Collapse navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/login">Login</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                :
                <Collapse navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem className="pull-right">
                            <Button onClick={this.submitLogout}>Logout</Button>
                        </NavItem>
                        <NavItem className="pull-right">
                            <NavLink tag={Link} to="/"><span>Hello, </span>{this.props.username}</NavLink>
                        </NavItem>
                        <NavItem className="pull-right">
                            <NavLink tag={Link} to="/users">Users</NavLink>
                        </NavItem>
                        <NavItem className="pull-right">
                            <NavLink tag={Link} to="/courses">Courses</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>

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