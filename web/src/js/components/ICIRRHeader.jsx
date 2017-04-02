import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';

import Header from 'components/Header';

class ICIRRHeader extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <Header>
        <img className='ICIRRHeader-icon' src='/images/favicon.ico' />
        ICIRR
      </Header>
    );
  }
}

ICIRRHeader.propTypes = {
};

export default ICIRRHeader;
