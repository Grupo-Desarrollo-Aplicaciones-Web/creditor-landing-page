import { strict as assert } from 'node:assert'
import { test } from 'node:test'
import { APP_ROUTES, buildAppUrl } from '../src/lib/app-url.js'

test('segment calls to action resolve to the local hash router', () => {
  assert.equal(buildAppUrl('http://localhost:5174', APP_ROUTES.obligations), 'http://localhost:5174/#/dashboard')
  assert.equal(buildAppUrl('http://localhost:5174', APP_ROUTES.newPurchase), 'http://localhost:5174/#/purchases/new')
})
test('a configured application subpath is retained and stale query/hash removed', () => {
  assert.equal(buildAppUrl('https://example.test/creditor-app/?debug=1#/old', '/dashboard'), 'https://example.test/creditor-app/#/dashboard')
})
test('invalid or unsafe application destinations are rejected', () => {
  for (const base of ['javascript:alert(1)', '/relative', 'https://user:password@example.test']) {
    assert.throws(() => buildAppUrl(base, '/dashboard'))
  }
  for (const route of ['//example.test', 'https://example.test', '/dashboard?next=bad']) {
    assert.throws(() => buildAppUrl('http://localhost:5174', route))
  }
})
