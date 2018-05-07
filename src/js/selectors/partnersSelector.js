import _ from 'lodash';
import { createSelector } from 'reselect';

/**
 * A selector to memoize the list of partners that match
 * the currently selected filters.
 * 
 * As of 2018-05-06, only one filter can be selected at a time, but
 * in previous iterations we allowed multiple tabs to be selected
 * and just kept the logic from that. It doesn't hurt and makes it
 * easier to go back that direction if we want.
 */
export default createSelector(
  (state) => state.map.partners,
  (state) => state.map.selectedFilters,
  (partners, selectedFilters) => {
    return _.filter(partners, (marker) => {
      let matchAll = true;
      _.forEach(selectedFilters, (filter) => {
        matchAll = marker.services[filter] && matchAll;
      });
      return matchAll;
    });
  }
);
