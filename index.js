// https://github.com/facebook/react-native/issues/9599
if (typeof global.self === "undefined") global.self = global;

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import Root from './app/native/containers/Root'

class TrackDev extends Component {
  render() {
    return (
      <Root/>
    );
  }
}

AppRegistry.registerComponent('trackdev', () => TrackDev);
