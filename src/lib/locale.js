export const SUPPORTED_LOCALES = Object.freeze(['en-US', 'es-419'])

export function initialLocale(readPreference) {
  try {
    const saved = readPreference()
    return SUPPORTED_LOCALES.includes(saved) ? saved : 'en-US'
  } catch {
    return 'en-US'
  }
}
