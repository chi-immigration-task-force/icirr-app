import PropTypes from 'prop-types';
import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';

import withTranslate from 'localization/withTranslate';

class ServiceListItem extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <div className='DiscoverRoute-servicesListItem' name={this.props.value} onClick={this.props.onClick}>
        <span className='DiscoverRoute-servicesListItemLabel'>
          {this.props.translate(`discover.items.${this.props.value}`)}
        </span>
        <span className='DiscoverRoute-servicesListItemArrow'>></span>
      </div>
    );
  }
}

ServiceListItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  translate: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default withTranslate(ServiceListItem);
