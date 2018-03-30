import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import Main from './Main';
import {connect} from 'react-redux';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import UsersPage from './UsersPage';
import { createHistory } from 'history';

class RootApp extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <NavigationBar />
            <Route exact path="/" component={Main}/>
            <Route path="/users" component={UsersPage} />
            <Route path="/login" component={LoginPage}/>
            <Route path={`/register/:token`} component={RegisterPage}/>
          </div>
        </BrowserRouter>
    );
  }
}

export default connect()(RootApp)