import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import Main from './Main';
import LoginPage from './LoginPage'

export default class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <BrowserRouter>
          <div>
            <NavigationBar />

            <Route exact path="/" component={Main}/>
            <Route path="/login" component={LoginPage}/>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}