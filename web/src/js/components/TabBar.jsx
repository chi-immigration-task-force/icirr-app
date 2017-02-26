import _ from 'lodash';
import cx from 'classnames';
import React from 'react';
import { Link } from 'react-router';

class TabBar extends React.Component {
  render() {
    return (
      <div className='TabBar'>
        {_.map(this.props.tabs, (tab) => {
          const linkClassName = cx('TabBar-tab', tab.className);
          return (
            <Link key={tab.to}
              activeClassName='TabBar-tabActive'
              className={linkClassName}
              to={tab.to}>
              <div className='TabBar-tabIcon'>{tab.icon}</div>
              <div className='TabBar-tabName'>
                {tab.name}
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}

TabBar.propTypes = {
  tabs: React.PropTypes.arrayOf(React.PropTypes.shape({
    className: React.PropTypes.string,
    icon: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    to: React.PropTypes.string.isRequired,
  })).isRequired,
};

export default TabBar;
