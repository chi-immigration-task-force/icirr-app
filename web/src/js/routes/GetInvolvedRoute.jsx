import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';

class GetInvolvedRoute extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <div className='GetInvolvedRoute'>Get involved goes here</div>
    );
  }
}

GetInvolvedRoute.propTypes = {};

export default GetInvolvedRoute;
