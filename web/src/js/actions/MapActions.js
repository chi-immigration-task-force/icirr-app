export function setSelectedFilter(selectedFilter) {
  return {
    type: 'SELECT_FILTER',
    payload: selectedFilter,
  };
}

export function setSelectedMarker(selectedMarker) {
  return {
    type: 'SELECT_MARKER',
    payload: selectedMarker,
  };
}
