require('../css/index.scss');
require.context('../images', true, /^\.\//);

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';
import { browserHistory, Router } from 'react-router';
import routes from './routes';
import persistState from 'redux-localstorage';

import rootReducer from './state';

const enhancer = compose(
  persistState('personalInfo'),
);

const initialState = undefined; // eslint-disable-line no-undefined

const store = createStore(rootReducer, initialState, enhancer);

// Render the main component into the dom
ReactDOM.render(
  <Provider store={store}>
    <Router
      history={browserHistory}
      routes={routes}
    />
  </Provider>,
document.getElementById('Root'));
