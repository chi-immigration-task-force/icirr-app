import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';

import ICIRRHeader from 'components/ICIRRHeader';
import TabBar from 'components/TabBar';

class NavigationRoute extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <div className='NavigationRoute'>
        <ICIRRHeader />
        <div className='NavigationRoute-content'>
          {this.props.children}
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
  children: React.PropTypes.object.isRequired,
};

export default NavigationRoute;
