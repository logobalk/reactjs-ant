import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import { routerMiddleware } from 'connected-react-router/immutable';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import createReducer from './reducers';
import sagas from './sagas';
import serviceWorkerStore from './swStore';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}, history) {
  // Create the store with middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  // 3. reduxLogger: Log Redux state changes
  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history),
  ];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger({
      diff: true,
      collapsed: true,
    }));
  }

  const enhancers = [applyMiddleware(...middlewares)];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle, indent */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
      typeof window === 'object' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;
  /* eslint-enable */

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    composeEnhancers(...enhancers),
  );

  // Extensions
  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {}; // Reducer registry
  store.injectedSagas = {}; // Saga registry
  // Start sagas.
  sagaMiddleware.run(sagas);

  // For service worker
  if ('serviceWorker' in navigator) {
    serviceWorkerStore({
      dispatch: store.dispatch,
    });
  }

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createReducer(store.injectedReducers));
    });
  }

  return store;
}
