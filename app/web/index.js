import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './containers/App2';
import LoginPage from './containers/components/login/LoginPage';

render((
  <Router>
    <App>
        <Switch>
            <Route path="/login" component={LoginPage} />
        </Switch>
    </App>
  </Router>
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
