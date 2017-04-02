require('../css/index.scss');
require.context('../images', true, /^\.\//);

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';
import persistState from 'redux-localstorage';
import rootReducer from './state';


const enhancer = compose(
  persistState('settings'),
);

const initialState = undefined; // eslint-disable-line no-undefined

const store = createStore(rootReducer, initialState, enhancer);

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

if (module.hot) {
  module.hot.accept('./App', () => {
    const App = require('./App').default;
    render(App);
  });
}
