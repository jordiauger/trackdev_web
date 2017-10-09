import React, { Component, PropTypes } from 'react';
import { Provider }             from 'react-redux';
import ReactNativeWebHelloWorld from './App';
import App from './App2';
import DevTools                 from './DevTools';

export default class Root extends Component {
  render() {
    return (
        <div>
          <App />
        </div>
    );
  }
}

//<DevTools />

Root.propTypes = {
  store: PropTypes.object.isRequired,
};
