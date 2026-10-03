import { APP_ROUTES, buildAppUrl } from './lib/app-url.js'

const base = import.meta.env.VITE_APP_URL || 'http://localhost:5174'
export const appLinks = Object.freeze({
  obligations: buildAppUrl(base, APP_ROUTES.obligations),
  newPurchase: buildAppUrl(base, APP_ROUTES.newPurchase)
})
