import _ from 'lodash';
import LocalizedStrings from 'react-localization';

import servicesConstants from 'constants/servicesConstants';

import kyr from 'static/kyr';
import kyrSpanish from 'static/kyr-spanish';

// Since `en` is listed first, it becomes the default language. If any keys are missing
// it will fall back onto english;
const strings = new LocalizedStrings({
  en: {
    header: {
      back: 'Back',
    },
    discover: {
      footerLink: 'ICIRR',
      footerText: 'Built with love by',
      header: 'I need help with...',
      items: {
        [servicesConstants.hasCitizenshipClasses]: 'Citizenship',
        [servicesConstants.hasEnglishClasses]: 'English Classes',
        [servicesConstants.hasLegalAid]: 'Legal Aid',
        [servicesConstants.hasOutreachAndEducation]: 'In my community',
        kyr: 'My rights',
      },
    },
    kyr: {
      content: kyr,
    },
    map: {
      filterLabels: {
        [servicesConstants.hasCitizenshipClasses]: 'Citizenship',
        [servicesConstants.hasEnglishClasses]: 'English',
        [servicesConstants.hasLegalAid]: 'Legal Aid',
        [servicesConstants.hasOutreachAndEducation]: 'Education',
      },
    },
    navigation: {
      list: 'List',
      map: 'Map',
    },
    partner: {
      getDirections: 'Get Directions',
      phone: 'Phone',
    },
  },
  es: {
    header: {
      back: 'Regrese',
    },
    discover: {
      footerLink: 'ICIRR',
      footerText: 'Desarrollado con cariño por',
      header: 'Necesito ayuda con...',
      items: {
        [servicesConstants.hasCitizenshipClasses]: 'Ciudadanía',
        [servicesConstants.hasEnglishClasses]: 'Clases de inglés',
        [servicesConstants.hasLegalAid]: 'Ayuda Legal',
        [servicesConstants.hasOutreachAndEducation]: 'En mi comunidad',
        kyr: 'Mis derechos',
      },
    },
    kyr: {
      content: kyrSpanish,
    },
    map: {
      filterLabels: {
        [servicesConstants.hasCitizenshipClasses]: 'Ciudadanía',
        [servicesConstants.hasEnglishClasses]: 'Inglés',
        [servicesConstants.hasLegalAid]: 'Abogado',
        [servicesConstants.hasOutreachAndEducation]: 'Educación',
      },
    },
    navigation: {
      list: 'Lista',
      map: 'Mapa',
    },
    partner: {
      getDirections: 'Obtenga las direcciones',
      phone: 'Teléfono',
    },
  },
});

export function getLanguageOptions() {
  // TODO (YK 2017-04-18): memoize this on a per-language basis if we really care about performance
  return _.map(strings.getAvailableLanguages(), (availableLanguage) => {
    return {
      label: strings.settings.languageOptions[availableLanguage],
      value: availableLanguage,
    };
  });
}

export default strings;
