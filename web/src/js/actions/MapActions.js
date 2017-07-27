export function setSelectedMarker(selectedMarker) {
  return {
    type: 'SELECT_MARKER',
    payload: selectedMarker,
  };
}
