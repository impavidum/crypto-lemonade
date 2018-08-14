import { createStore, applyMiddleware } from 'redux'

// Saga Imports
import createSagaMiddleware from 'redux-saga'
import userSagas from '../sagas/UserSagas'
import bitcoinSagas from '../sagas/bitcoinSagas'

import reducers from '../reducers'

// Saga Middleware
const sagaMiddleware = createSagaMiddleware()

function reduxStore(initialState) {
  const store = createStore(reducers, initialState, applyMiddleware(sagaMiddleware),
    window.devToolsExtension && window.devToolsExtension())

  // Start Up User Sagas
  sagaMiddleware.run(userSagas)

  // Start Up Bitcoin Sagas
  sagaMiddleware.run(bitcoinSagas)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      // We need to require for hot reloading to work properly.
      const nextReducer = require('../reducers')  // eslint-disable-line global-require
      store.replaceReducer(nextReducer)
    });
  }

  store.subscribe(() => {
    // console.log('store changed', store.getState())
  })

  return store
}

export default reduxStore
