/**
 * Takes the newly selected language
 * and creates a redux action that sets the provided language.
 * 
 * @param {object} language The selected language the app should be configured with.
 * @returns {object} A redux action
 */
export function setLanguage(language) {
  return {
    type: 'SET_LANGUAGE',
    payload: language,
  };
}
