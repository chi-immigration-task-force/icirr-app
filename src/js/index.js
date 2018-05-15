// We require CSS and images in this way so that we can get reloads
// with webpack hot reloader
require('../css/index.scss');
require.context('../images', true, /^\.\//);

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';
import persistState from 'redux-localstorage';

import strings from 'localization';

import rootReducer from './state';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// We use persistState to keep your selected language the same even
// after you leave the site, so if you come back it remembers.
const enhancer = composeEnhancers(
  persistState('settings'),
);

const initialState = undefined; // eslint-disable-line no-undefined

const store = createStore(rootReducer, initialState, enhancer);

// Makes sure to set the current language to what's in settings after initialization
strings.setLanguage(store.getState().settings.language);

import App from './App';

const rootEl = document.getElementById('Root');
// Render the main component into the dom
const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    rootEl
  );
};

render(App);

// `module.hot` will only be on in development.
// This is for hot reloading of modules: https://webpack.js.org/concepts/hot-module-replacement/
if (module.hot) {
  module.hot.accept('./App', () => {
    const App = require('./App').default;
    render(App);
  });
}
