import cx from 'classnames';
import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Icon from 'components/Icon';

/**
 * Renders a tab bar and its constituent tabs.
 * If the tab has an icon, renders that in addition to the label
 */
class TabBar extends React.Component {
  render() {
    const tabBarClassName = cx('TabBar', this.props.className);

    return (
      <div className={tabBarClassName}>
        {_.map(this.props.tabs, (tab) => {
          const linkClassName = cx('TabBar-tab', this.props.tabsClassName, {
            'is-active': tab.key === this.props.selectedTab,
          });
          return (
            <div className={linkClassName} onClick={tab.onClick} key={tab.key}>
              <div className='TabBar-tabName'>
                {tab.label}
                {tab.icon && <Icon className='TabBar-tabIcon' icon={tab.icon} />}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

TabBar.propTypes = {
  className: PropTypes.string,
  selectedTab: PropTypes.string.isRequired,
  tabsClassName: PropTypes.string,
  tabs: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  })).isRequired,
};

export default TabBar;
