import cx from 'classnames';
import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';

class Body extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const className = cx('Body', this.props.className);
    return (
      <div className={className}>
        <div className='Body-content'>
          {this.props.children}
        </div>
        <div className='Body-overflowGradient' />
      </div>
    );
  }
}

Body.propTypes = {
  children: React.PropTypes.node.isRequired,
  className: React.PropTypes.string,
};

export default Body;
