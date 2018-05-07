/**
 * Takes an object for the settings (at present, just the key 'language' is valid)
 * and creates a redux action that sets the provided settings.
 * 
 * @param {object} settings The settings the app should be configured with.
 *   At present, only takes the selected language.
 * @returns {object} A redux action
 */
export function setSettings(settings) {
  return {
    type: 'SET_SETTINGS',
    payload: settings,
  };
}
