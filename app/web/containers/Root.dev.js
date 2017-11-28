import React, { Component } from 'react';
import configureStore from '../../store/configureStore.dev'
import App from './App'

const store = configureStore()

export default class Root extends Component {
  render() {
    return ( <App store={store}/> );
  }
}