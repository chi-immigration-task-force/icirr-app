import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';

class EmergencyRoute extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <div className='EmergencyRoute'>Emergency stuff goes here</div>
    );
  }
}

EmergencyRoute.propTypes = {};

export default EmergencyRoute;
