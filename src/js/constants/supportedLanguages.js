import keyMirror from 'key-mirror';

// A list of currently supported languages.
export const languageOptions = [{
  label: 'EN',
  value: 'en',
}, {
  label: 'ES',
  value: 'es',
}];

export default keyMirror({
  en: null,
  es: null,
});
