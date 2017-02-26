require('../css/index.scss');
require.context('../images', true, /^\.\//);

import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router } from 'react-router';
import routes from './routes';

// Render the main component into the dom
ReactDOM.render(
  <Router
    history={browserHistory}
    routes={routes}
  />,
document.getElementById('Root'));
