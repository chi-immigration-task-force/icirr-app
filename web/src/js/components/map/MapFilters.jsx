import _ from 'lodash';
import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';

import MapFiltersItem from 'components/map/MapFiltersItem';

import { servicesFilterOptions } from 'constants/servicesConstants';

class MapFilters extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <div className='MapFilters'>
        {_.map(servicesFilterOptions, (option) => {
          return (
            <MapFiltersItem
              key={option.value}
              className='MapFilters-item'
              isSelected={option.value === this.props.selectedFilter}
              onClick={this.props.onSelect}
              {...option} />
          );
        })}
      </div>
    );
  }
}

MapFilters.propTypes = {
  onSelect: React.PropTypes.func.isRequired,
  selectedFilter: React.PropTypes.string.isRequired,
};

export default MapFilters;