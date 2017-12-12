import keyMirror from 'key-mirror';

const servicesConstants = keyMirror({
  hasCitizenshipClasses: null,
  hasEnglishClasses: null,
  hasLegalAid: null,
  hasOutreachAndEducation: null,
});

export const servicesFilterOptions = [{
  value: servicesConstants.hasCitizenshipClasses,
}, {
  value: servicesConstants.hasEnglishClasses,
}, {
  value: servicesConstants.hasLegalAid,
}, {
  value: servicesConstants.hasOutreachAndEducation,
}];

export default servicesConstants;
