import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';

import TabBar from 'components/TabBar';

class NavigationRoute extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <div className='NavigationRoute'>
        {this.props.children}
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
  }, {
    icon: 'ICON',
    name: 'Get Involved',
    to: '/get-involved',
  }, {
    icon: 'ICON',
    name: 'Map',
    to: '/map',
  }, {
    icon: 'ICON',
    name: 'Your Rights',
    to: '/kyr',
  }
];

NavigationRoute.propTypes = {
  children: React.PropTypes.object.isRequired,
};

export default NavigationRoute;
