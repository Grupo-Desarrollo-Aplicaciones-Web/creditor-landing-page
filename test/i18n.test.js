import { strict as assert } from 'node:assert'
import { test } from 'node:test'
import { messages } from '../src/messages.js'
import { initialLocale } from '../src/lib/locale.js'

test('first visit, invalid preference and unavailable storage default to English', () => {
  assert.equal(initialLocale(() => null), 'en-US')
  assert.equal(initialLocale(() => 'es'), 'en-US')
  assert.equal(initialLocale(() => { throw new Error('Storage denied') }), 'en-US')
  assert.equal(initialLocale(() => 'es-419'), 'es-419')
})
test('both languages cover the same content, legal sections and parameter names', () => {
  const compare = (english, spanish, path = '') => {
    assert.equal(typeof spanish, typeof english, path)
    if (typeof english === 'object') {
      assert.deepEqual(Object.keys(spanish), Object.keys(english), path)
      for (const key of Object.keys(english)) compare(english[key], spanish[key], path + '.' + key)
    } else {
      assert.deepEqual((spanish.match(/\{\w+\}/g) || []).sort(), (english.match(/\{\w+\}/g) || []).sort(), path)
      assert.ok(spanish.length, path)
    }
  }
  compare(messages['en-US'], messages['es-419'])
})
