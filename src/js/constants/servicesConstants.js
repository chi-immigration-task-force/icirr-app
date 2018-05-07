import keyMirror from 'key-mirror';

// Just some constants to help make sure we use the same
// string to reference the service in all cases.
// keyMirror just creates an object where every key's value
// is a string of the key.
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
