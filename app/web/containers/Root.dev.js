import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import Main from './Main';
import LoginPage from '../../components/LoginPage'
import configureStore from '../../store/configureStore.dev'

const store = configureStore()

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
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