import { createStore, applyMiddleware, compose } from 'redux';
import thunk        from 'redux-thunk';
import { persistState } from 'redux-devtools';
import StockApp     from '../reducers';
import { createLogger } from 'redux-logger';
import DevTools     from '../web/containers/DevTools';


const enhancer = compose(
  applyMiddleware(thunk),
  DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&#]+)\b/
    )
  )
);

export default function configureStore(initialState) {
  const store = createStore(StockApp, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers').default)
    );
  }

  return store;
}