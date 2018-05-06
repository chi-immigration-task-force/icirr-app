import _ from 'lodash';

import servicesConstants from 'constants/servicesConstants';

import naiPartners from 'static/naiPartners.csv';

const partners = _.map(naiPartners, (partner) => {
  const hasNaturalizationClasses = partner.hasCitizenshipClasses === 'True' || partner.hasEnglishClasses === 'True';
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
      [servicesConstants.hasNaturalizationClasses]: hasNaturalizationClasses,
      [servicesConstants.hasLegalAid]: partner.hasLegalAid === 'True',
      [servicesConstants.hasOutreachAndEducation]: partner.hasOutreachAndEducation === 'True',
    },
    website: partner.website,
  };
});

const initialState = {
  partners,
  selectedFilters: [servicesConstants.hasNaturalizationClasses],
  selectedMarker: null,
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'CLEAR_MARKER': {
      return {
        ...state,
        selectedMarker: null,
      };
    }
    case 'SELECT_MARKER': {
      return {
        ...state,
        selectedMarker: payload,
      };
    }
    case 'SET_FILTER': {
      const newSelectedFilters = [payload];
      return {
        ...state,
        selectedFilters: newSelectedFilters,
      };
    }
    case 'TOGGLE_FILTER': {
      const newSelectedFilters = _.includes(state.selectedFilters, payload) ?
        _.without(state.selectedFilters, payload) : _.concat(state.selectedFilters, [payload]);
      return {
        ...state,
        selectedFilters: newSelectedFilters,
      };
    }
    default:
      return state;
  }
}
