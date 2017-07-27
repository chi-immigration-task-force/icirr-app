import _ from 'lodash';

import naiPartners from 'static/naiPartners.csv';

const markers = _.map(naiPartners, (partner) => {
  return {
    defaultAnimation: 2,
    address: partner.address,
    id: partner.address,
    key: partner.address,
    name: partner.name,
    phone: partner.phone,
    position: {
      lat: partner.lat,
      lng: partner.lng,
    },
    website: partner.website,
  };
});

const initialState = {
  markers,
  selectedMarker: null,
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'SELECT_MARKER': {
      return {
        ...state,
        selectedMarker: payload,
      };
    }
    default:
      return state;
  }
}
