import React from 'react';

import TabBar from 'components/TabBar';

class NavigationRoute extends React.Component {
  render() {
    return (
      <div className='NavigationRoute'>
        {this.props.children}
        <TabBar tabs={NavigationRoute.tabs} />
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
