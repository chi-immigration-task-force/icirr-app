import keyMirror from 'key-mirror';

const servicesConstants = keyMirror({
  hasNaturalizationClasses: null,
  hasLegalAid: null,
  hasOutreachAndEducation: null,
});

export const servicesFilterOptions = [{
  value: servicesConstants.hasNaturalizationClasses,
}, {
  value: servicesConstants.hasLegalAid,
}, {
  value: servicesConstants.hasOutreachAndEducation,
}];

export const serviceNameToIcon = {
  [servicesConstants.hasNaturalizationClasses]: 'face',
  [servicesConstants.hasLegalAid]: 'assignment',
  [servicesConstants.hasOutreachAndEducation]: 'bookmark',
};

export default servicesConstants;
