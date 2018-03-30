import { createStore, applyMiddleware, compose } from 'redux';
import thunk        from 'redux-thunk';
import { persistState } from 'redux-devtools';
import reducer from '../reducers'
import middleware from '../middleware'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  middleware,
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&#]+)\b/
    )
  )
);

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState, enhancer);
  return store;
}
