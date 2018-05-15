import _ from 'lodash';

import servicesConstants from 'constants/servicesConstants';

import naiPartners from 'static/naiPartners.csv';

/**
 * Reads all the NAI (New Americans Initiative) partners information and massages
 * it into a shape that's convenient for the react google maps api.
 * Note that the dataset actually has two columns, one for citizenship classes
 * and one for english classes, that we've decided (at ICIRR's suggestion), to merge
 * into one field.
 */
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
    // Clears the selected map marker
    case 'CLEAR_MARKER': {
      return {
        ...state,
        selectedMarker: null,
      };
    }
    // Selects the provided marker
    case 'SELECT_MARKER': {
      return {
        ...state,
        selectedMarker: payload,
      };
    }
    // Sets the selected map / list filter to be the provided one
    case 'SET_FILTER': {
      const newSelectedFilters = [payload];
      return {
        ...state,
        selectedFilters: newSelectedFilters,
      };
    }
    // Toggles the provided filter. If it's on, turns it off, and vice versa.
    // As fo 2018-05-15 it's unused
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
