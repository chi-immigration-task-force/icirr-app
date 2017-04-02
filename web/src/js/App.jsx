import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import NavigationRoute from 'routes/NavigationRoute';

// Render the main component into the dom
export default class App extends React.Component { //eslint-disable-line react/require-optimization
  render() {
    return (
      <BrowserRouter>
        <NavigationRoute />
      </BrowserRouter>
    );
  }
}
