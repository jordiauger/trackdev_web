import React, { Component } from 'react';
import { Text } from 'react-native'
import { NativeRouter, Link } from 'react-router-native'
import { Navigation, Card } from 'react-router-navigation'
import { Provider } from 'react-redux';
import LoginPage from './LoginPage'
import configureStore from '../../store/configureStore.native'

const store = configureStore()

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
          <Navigation>
            <Card
              exact
              path="/"
              render={() => <Link to="/login"><Text>Log in</Text></Link> }
            />
            <Card
              path="/login"
              render={() => <LoginPage/> }
            />
          </Navigation>
        </NativeRouter>
      </Provider>
    );
  }
}

