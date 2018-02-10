import cx from 'classnames';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';

import Icon from 'components/Icon';

import { serviceNameToIcon } from 'constants/servicesConstants';

import withTranslate from 'localization/withTranslate';

class ServicesFiltersItem extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  handleClick() {
    this.props.onClick(this.props.value);
  }

  render() {
    const className = cx(this.props.className, {
      'is-selected': this.props.isSelected,
    });
    return (
      <div className={className} onClick={this.handleClick}>
        {this.props.translate(`map.filterLabels.${this.props.value}`)}
        <Icon className={this.props.iconClassName} icon={serviceNameToIcon[this.props.value]} />
      </div>
    );
  }
}

ServicesFiltersItem.propTypes = {
  className: PropTypes.string.isRequired,
  iconClassName: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  translate: PropTypes.func.isRequired,
};

export default withTranslate(ServicesFiltersItem);
