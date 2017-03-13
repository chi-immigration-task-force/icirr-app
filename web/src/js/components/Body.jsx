import cx from 'classnames';
import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';

class TabBar extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const className = cx('Body', this.props.className);
    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  }
}

TabBar.propTypes = {
  children: React.PropTypes.node.isRequired,
  className: React.PropTypes.string,
};

export default TabBar;
