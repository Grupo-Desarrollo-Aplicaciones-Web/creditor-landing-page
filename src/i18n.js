import { computed, ref } from 'vue'
import { messages } from './messages.js'

const STORAGE_KEY = 'creditor-locale'
export const locales = [
  { code: 'en-US', label: 'EN', name: 'English' },
  { code: 'es-419', label: 'ES', name: 'Español latinoamericano' }
]
const supported = (code) => locales.some((item) => item.code === code)
const initialLocale = () => {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    return supported(saved) ? saved : 'en-US'
  } catch {
    return 'en-US'
  }
}
const locale = ref(initialLocale())
const resolve = (dictionary, path) =>
  path.split('.').reduce((value, key) => value?.[key], dictionary)

export const setLocale = (code) => {
  if (!supported(code)) return
  locale.value = code
  try { window.localStorage.setItem(STORAGE_KEY, code) } catch { /* Preference is optional. */ }
  document.documentElement.lang = code
  document.title = messages[code].meta.title
  for (const selector of ['meta[name="description"]', 'meta[property="og:description"]']) {
    document.querySelector(selector)?.setAttribute('content', messages[code].meta.description)
  }
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', messages[code].meta.title)
}

export const useI18n = () => {
  const t = (path, params) => {
    const value = resolve(messages[locale.value], path) ?? resolve(messages['en-US'], path) ?? path
    if (typeof value !== 'string' || !params) return value
    return value.replace(/\{(\w+)\}/g, (match, key) => params[key] ?? match)
  }
  // Display language changes formatting, never the currency or numerical amount.
  const money = (value) => new Intl.NumberFormat(
    locale.value === 'es-419' ? 'es-PE' : 'en-US',
    { style: 'currency', currency: 'PEN', currencyDisplay: 'code' }
  ).format(Number.isFinite(value) ? value : 0)
  return { locale, t, money, setLocale, otherLocale: computed(() => locale.value === 'en-US' ? 'es-419' : 'en-US') }
}
