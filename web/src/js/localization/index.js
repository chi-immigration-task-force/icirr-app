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
      infoHeader: "I'm looking for information about...",
      orgHeader: 'I need someone to help me with...',
      items: {
        [servicesConstants.hasNaturalizationClasses]: 'Passing the citizenship interview',
        [servicesConstants.hasLegalAid]: 'Applying for citizenship',
        [servicesConstants.hasOutreachAndEducation]: 'Finding more information',
        kyr: 'My rights',
        nextWorkshop: 'The next citizenship workshop',
        citizenshipRequirements: 'Requirements to become a citizen',
        workshopWhatToBring: 'What to bring to a workshop',
        lowCostLegalAidProviders: 'Immigration legal services providers',
        feeWaiverCalculator: 'Applying for citizenship for free',
      },
    },
    kyr: {
      content: kyr,
      imageSrc: 'kyr_eng.png',
    },
    map: {
      filterLabels: {
        [servicesConstants.hasNaturalizationClasses]: 'Classes',
        [servicesConstants.hasLegalAid]: 'Applying',
        [servicesConstants.hasOutreachAndEducation]: 'More info',
      },
    },
    navigation: {
      list: 'List',
      map: 'Map',
    },
    partner: {
      directions: 'Directions',
      phone: 'Phone',
    },
  },
  es: {
    header: {
      back: 'Atrás',
    },
    discover: {
      footerLink: 'ICIRR',
      footerText: 'Desarrollado con cariño por',
      infoHeader: 'Estoy buscando información de...',
      orgHeader: 'Necesito que alguien me ayude con...',
      items: {
        [servicesConstants.hasNaturalizationClasses]: 'Aprobando la entrevista de ciudadanía',
        [servicesConstants.hasLegalAid]: 'Solicitando la ciudadanía estadounidense',
        [servicesConstants.hasOutreachAndEducation]: 'Encontrando mayor información',
        kyr: 'Mis derechos',
        nextWorkshop: 'El siguiente taller de ciudadanía',
        citizenshipRequirements: 'Requisitos para convertirse en ciudadano',
        workshopWhatToBring: 'Qué traer al taller',
        lowCostLegalAidProviders: 'Proveedores de servicios legales en temas de inmigración',
        feeWaiverCalculator: 'Solicitando la gratuidad de los costos del proceso de ciudadanía',
      },
    },
    kyr: {
      content: kyrSpanish,
      imageSrc: 'kyr_esp.png',
    },
    map: {
      filterLabels: {
        [servicesConstants.hasNaturalizationClasses]: 'Clases',
        [servicesConstants.hasLegalAid]: 'Solicitando',
        [servicesConstants.hasOutreachAndEducation]: 'Más información',
      },
    },
    navigation: {
      list: 'Lista',
      map: 'Mapa',
    },
    partner: {
      directions: 'Direcciones',
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
