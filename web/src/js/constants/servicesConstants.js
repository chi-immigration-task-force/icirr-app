import keyMirror from 'key-mirror';

const servicesConstants = keyMirror({
  all: null,
  hasCitizenshipClasses: null,
  hasEnglishClasses: null,
  hasLegalAid: null,
  hasOutreachAndEducation: null,
});

export const servicesFilterOptions = [{
  label: 'All',
  value: servicesConstants.all,
}, {
  label: 'Citizenship',
  value: servicesConstants.hasCitizenshipClasses,
}, {
  label: 'English',
  value: servicesConstants.hasEnglishClasses,
}, {
  label: 'Legal Aid',
  value: servicesConstants.hasLegalAid,
}, {
  label: 'Education',
  value: servicesConstants.hasOutreachAndEducation,
}];

export default servicesConstants;
