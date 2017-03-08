require('../css/index.scss');
require.context('../images', true, /^\.\//);

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { browserHistory, Router } from 'react-router';
import routes from './routes';

import rootReducer from './state';

const store = createStore(rootReducer);

// Render the main component into the dom
ReactDOM.render(
  <Provider store={store}>
    <Router
      history={browserHistory}
      routes={routes}
    />
  </Provider>,
document.getElementById('Root'));
