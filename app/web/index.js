import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk        from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import App from './containers/App2';
import LoginPage from './containers/components/login/LoginPage';

const store = createStore(
    (state = {}) => state,
    applyMiddleware(thunk)
);

render((
  <Provider store={store}>
    <Router>
      <App>
          <Switch>
              <Route path="/login" component={LoginPage} />
          </Switch>
      </App>
    </Router>
  </Provider>
), document.getElementById('root'));



/**import React          from 'react';
import { render }     from 'react-dom';
import Root           from './containers/Root';
import configureStore from '../store/configureStore';

// load our css
require('./styles/style.less');

const store = configureStore();
const rootElement = document.getElementById('root');

render( <Root store={store} />, rootElement );**/
