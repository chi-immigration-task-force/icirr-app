/* eslint-disable react/jsx-handler-names */
import autoBind from 'react-autobind';
import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import shallowCompare from 'react-addons-shallow-compare';
import OrganizationListItem from 'components/organization-list/OrganizationListItem';

import partnersSelector from 'selectors/partnersSelector';

/**
 * Takes the list of partners that match the selected service and
 * renders them out in a list.
 * The partners are limited to those that match the selected
 * service by the partnersSelector.
 */
class OrganizationListRoute extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <div className='OrganizationListRoute-list'>
        {_.map(this.props.partners, (partner) => {
          return (
            <OrganizationListItem key={partner.id} {...partner} selectedTabs={this.props.selectedTabs} />
          );
        })}
      </div>
    );
  }
}

OrganizationListRoute.propTypes = {
  partners: PropTypes.arrayOf(PropTypes.object),
  selectedTabs: PropTypes.arrayOf(PropTypes.string),
};

const mapStateToProps = (state) => {
  return {
    partners: partnersSelector(state),
    selectedTabs: state.map.selectedFilters,
  };
};

export default  connect(mapStateToProps)(OrganizationListRoute);
