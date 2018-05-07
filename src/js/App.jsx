import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import NavigationRoute from 'routes/NavigationRoute';

// Render the main component into the dom
export default class App extends React.Component { //eslint-disable-line react/require-optimization
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' component={NavigationRoute} />
        </Switch>
      </BrowserRouter>
    );
  }
}
