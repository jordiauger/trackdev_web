import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import TrackDevApp from './App2';
import LoginPage from '../containers/components/login/LoginPage';
import DevTools from './DevTools';
import configureStore from '../../store/configureStore.dev'

const store = configureStore()

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Router>
            <TrackDevApp>
              <Switch>
                <Route path="/login" component={LoginPage}/>
              </Switch>
            </TrackDevApp>
          </Router>
          <DevTools/>
        </div>
      </Provider>
    );
  }
}