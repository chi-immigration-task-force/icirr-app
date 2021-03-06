import PropTypes from 'prop-types';
import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';

// Simple component that wraps children in the Header class
class Header extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <div className='Header'>
        {this.props.children}
      </div>
    );
  }
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
