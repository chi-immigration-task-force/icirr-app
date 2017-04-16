import _ from 'lodash';
import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';

import Header from 'components/Header';
import HeaderButtonLeft from 'components/buttons/HeaderButtonLeft';

class ICIRRHeader extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <Header>
        {_.isFunction(this.props.onBack) &&
          <HeaderButtonLeft onClick={this.props.onBack}>
            Back
          </HeaderButtonLeft>
        }
        <img className='ICIRRHeader-icon' src='/images/favicon.ico' />
        ICIRR
      </Header>
    );
  }
}

ICIRRHeader.propTypes = {
  onBack: React.PropTypes.func,
};

export default ICIRRHeader;
