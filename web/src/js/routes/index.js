import React from 'react';
import { Redirect, Route } from 'react-router';

import EmergencyRoute from 'routes/EmergencyRoute';
import KnowYourRightsRoute from 'routes/KnowYourRightsRoute';
import GetInvolvedRoute from 'routes/GetInvolvedRoute';
import MapRoute from 'routes/MapRoute';
import NavigationRoute from 'routes/NavigationRoute';

export default [
  <Route key='NavigationRoute' component={NavigationRoute}>
    <Route path='/emergency' component={EmergencyRoute} />
    <Route path='/get-involved' component={GetInvolvedRoute} />
    <Route path='/kyr' component={KnowYourRightsRoute} />
    <Route path='/map' component={MapRoute} />
  </Route>,
  <Redirect key='FallbackRedirect' from='*' to='/map' />
];
