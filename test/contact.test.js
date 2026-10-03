import { strict as assert } from 'node:assert'
import { test } from 'node:test'
import { validateContact } from '../src/lib/contact.js'

test('whitespace-only and invalid entries identify both required fields', () => {
  assert.deepEqual(validateContact({ name: '   ', email: 'invalid' }), { name: 'errorRequired', email: 'errorEmail' })
})
test('a valid fictional example is accepted with surrounding whitespace', () => {
  assert.deepEqual(validateContact({ name: ' Demo User ', email: ' demo@example.test ', business: '' }), {})
})
test('email errors remain associated with email when the name is valid', () => {
  assert.deepEqual(validateContact({ name: 'Demo', email: 'demo@' }), { email: 'errorEmail' })
})
