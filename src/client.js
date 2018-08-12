import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import configureStore from './stores';

import {Router, browserHistory, Route, IndexRoute} from 'react-router';

import routes from './routes.js';
import App from './containers/App.js';


const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      
      <Route path="/" component={App}/>
    </Router>
  </Provider>, 

 document.getElementById('app'));


if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default; // eslint-disable-line global-require

    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <NextApp />
        </Provider>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
