import _ from 'lodash';

import servicesConstants from 'constants/servicesConstants';

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
    services: {
      [servicesConstants.hasCitizenshipClasses]: partner.hasCitizenshipClasses === 'True',
      [servicesConstants.hasEnglishClasses]: partner.hasEnglishClasses === 'True',
      [servicesConstants.hasLegalAid]: partner.hasLegalAid === 'True',
      [servicesConstants.hasOutreachAndEducation]: partner.hasOutreachAndEducation === 'True',
    },
    website: partner.website,
  };
});

const initialState = {
  markers,
  selectedFilter: servicesConstants.all,
  selectedMarker: null,
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'SELECT_FILTER': {
      return {
        ...state,
        selectedFilter: payload,
      };
    }
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
