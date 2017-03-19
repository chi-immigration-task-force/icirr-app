import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';

class MapRoute extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }
  
  render() {
    return (
      <div className='MapRoute'>Map goes here</div>
    );
  }
}

MapRoute.propTypes = {};

export default MapRoute;
