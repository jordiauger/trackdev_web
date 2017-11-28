import React, { Component } from 'react';
import configureStore from '../../store/configureStore.prod'
import App from './App'

const store = configureStore()

export default class Root extends Component {
  render() {
    return ( <App store={store}/> );
  }
}