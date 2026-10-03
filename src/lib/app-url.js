export const APP_ROUTES = Object.freeze({ obligations: '/dashboard', newPurchase: '/purchases/new' })

export function buildAppUrl(base, route) {
  const url = new URL(base)
  if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password) {
    throw new TypeError('VITE_APP_URL must be an HTTP(S) URL without credentials.')
  }
  if (!/^\/[a-z0-9/_-]*$/i.test(route) || route.startsWith('//')) {
    throw new TypeError('Application route must be a local absolute path.')
  }
  url.pathname = url.pathname.replace(/\/?$/, '/')
  url.search = ''
  url.hash = route
  return url.href
}
