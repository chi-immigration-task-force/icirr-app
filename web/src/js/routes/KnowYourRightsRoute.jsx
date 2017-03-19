import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';

class KnowYourRightsRoute extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <div className='KnowYourRightsRoute'>KYR goes here</div>
    );
  }
}

KnowYourRightsRoute.propTypes = {};

export default KnowYourRightsRoute;
