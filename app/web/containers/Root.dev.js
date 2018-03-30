import React, { Component } from 'react';
/*import configureStore from '../../store/configureStore.dev'*/
import RootApp from './App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../../reducers'
import middleware from '../..//middleware'

const store = createStore(reducer, middleware)

export default class Root extends Component {
  render() {
    return (
        <Provider store={store}>
            <RootApp/>
        </Provider>
        );
  }
}