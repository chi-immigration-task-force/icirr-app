/* eslint-disable react/jsx-handler-names */
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import shallowCompare from 'react-addons-shallow-compare';
import { Redirect, Route, Switch, withRouter } from 'react-router';

import { setFilter } from 'actions/MapActions';

import TabBar from 'components/TabBar';
import ServicesFilters from 'components/map/ServicesFilters';

import withTranslate from 'localization/withTranslate';

import MapRoute from 'routes/MapRoute';
import OrganizationListRoute from 'routes/OrganizationListRoute';

const LIST_KEY = 'list';
const MAP_KEY = 'map';

class OrganizationRoute extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  handleFilterSelect(filterValue) {
    this.props.setFilter(filterValue);
  }

  isMap() {
    return this.props.history.location.pathname === '/orgs/map';
  }

  toggleView() {
    if (this.isMap()) {
      this.props.history.replace('/orgs/list');
    } else {
      this.props.history.replace('/orgs/map');
    }
  }

  render() {
    const tabs = [{
      key: LIST_KEY,
      icon: 'list',
      label: this.props.translate('navigation.list'),
      onClick: this.toggleView,
    }, {
      key: MAP_KEY,
      icon: 'map',
      label: this.props.translate('navigation.map'),
      onClick: this.toggleView,
    }];
    return (
      <div className='OrganizationRoute'>
        <ServicesFilters onSelect={this.handleFilterSelect} selectedFilters={this.props.selectedFilters} />
        <Switch>
          <Route
            component={MapRoute}
            path='/orgs/map'
          />
          <Route
            component={OrganizationListRoute}
            path='/orgs/list'
          />
          <Redirect from='*' to='/orgs/list' />
        </Switch>
        <TabBar
          className='OrganizationRoute-mapListTabBar'
          selectedTab={this.isMap() ? MAP_KEY : LIST_KEY}
          tabs={tabs}
        />
      </div>
    );
  }
}

OrganizationRoute.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }),
    replace: PropTypes.func.isRequired,
  }).isRequired,
  selectedFilters: PropTypes.arrayOf(PropTypes.string),
  setFilter: PropTypes.func.isRequired,
  translate: PropTypes.func.isRequired,
};

const actions = {
  setFilter,
};

const mapStateToProps = (state) => {
  return {
    selectedFilters: state.map.selectedFilters,
  };
};

export default withRouter(connect(mapStateToProps, actions)(withTranslate(OrganizationRoute)));
