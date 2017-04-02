import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import ICIRRHeader from 'components/ICIRRHeader';
import TabBar from 'components/TabBar';

import EmergencyRoute from 'routes/EmergencyRoute';
import KnowYourRightsRoute from 'routes/KnowYourRightsRoute';
import MapRoute from 'routes/MapRoute';
import MoreRoute from 'routes/MoreRoute';

class NavigationRoute extends React.Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (
      <div className='NavigationRoute'>
        <ICIRRHeader />
        <div className='NavigationRoute-content'>
          <Switch>
            <Route path='/emergency' component={EmergencyRoute} />
            <Route path='/more' component={MoreRoute} />
            <Route path='/kyr' component={KnowYourRightsRoute} />
            <Route path='/map' component={MapRoute} />
            <Redirect from='*' to='/map' />
          </Switch>
        </div>
        <TabBar tabs={NavigationRoute.tabs} tabClassName='NavigationRoute-tab' />
      </div>
    );
  }
}

NavigationRoute.tabs = [
  {
    className: 'EmergencyRoute-tab',
    icon: 'ICON',
    name: 'Emergency',
    to: '/emergency',
  },{
    icon: 'ICON',
    name: 'Map',
    to: '/map',
  }, {
    icon: 'ICON',
    name: 'My Rights',
    to: '/kyr',
  }, {
    icon: 'ICON',
    name: 'More',
    to: '/more',
  },
];

NavigationRoute.propTypes = {
};

export default NavigationRoute;
