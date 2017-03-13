import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';

class TabBar extends React.Component {
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

TabBar.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default TabBar;
