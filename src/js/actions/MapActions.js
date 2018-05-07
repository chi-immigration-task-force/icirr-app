/**
 * Clears the selected marker on the map route
 * @returns {object} A redux action
 */
export function clearSelectedMarker() {
  return {
    type: 'CLEAR_MARKER',
  };
}

/**
 * Sets the currently selected service filter for the list of partners.
 * 
 * @param {string} filterName The service for which we should filter the list of partners
 * @returns {object} A redux action
 */
export function setFilter(filterName) {
  return {
    type: 'SET_FILTER',
    payload: filterName,
  };
}

/**
 * Toggles the selected service filter for the list of partners.
 * As of 2018-05-06, is not used.
 * 
 * @param {string} filterName The service for which we should filter the list of partners
 * @returns {object} A redux action
 */
export function toggleFilter(filterName) {
  return {
    type: 'TOGGLE_FILTER',
    payload: filterName,
  };
}

/**
 * Sets the marker that should be selected (and open) on the MapRoute. Since we don't
 * have an id, we use the address of the partner, which we assume is unique.
 * 
 * @param {string} selectedMarker The address of the marker that the user selected
 * @returns {object} A redux action
 */
export function setSelectedMarker(selectedMarker) {
  return {
    type: 'SELECT_MARKER',
    payload: selectedMarker,
  };
}
