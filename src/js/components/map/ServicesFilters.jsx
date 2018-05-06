import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';

import ServicesFiltersItem from 'components/map/ServicesFiltersItem';

import { servicesFilterOptions } from 'constants/servicesConstants';

class ServicesFilters extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <div className='ServicesFilters'>
        {_.map(servicesFilterOptions, (option) => {
          return (
            <ServicesFiltersItem
              key={option.value}
              className='ServicesFilters-item'
              iconClassName='ServicesFilters-itemIcon'
              isSelected={_.includes(this.props.selectedFilters, option.value)}
              onClick={this.props.onSelect}
              {...option} />
          );
        })}
      </div>
    );
  }
}

ServicesFilters.propTypes = {
  onSelect: PropTypes.func.isRequired,
  selectedFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ServicesFilters;
