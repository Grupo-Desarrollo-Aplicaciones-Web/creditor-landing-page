import { strict as assert } from 'node:assert'
import { test } from 'node:test'
import { estimateLoan } from '../src/lib/loan.js'

test('effective annual rate converts to a rate that compounds back to the same annual rate', () => {
  const result = estimateLoan(10000, 24, 12)
  assert.ok(Math.abs((1 + result.monthlyRate) ** 12 - 1.24) < 1e-12)
  assert.equal(Number(result.installment.toFixed(2)), 934.53)
  let balance = 10000
  for (let month = 0; month < 12; month++) balance = balance * (1 + result.monthlyRate) - result.installment
  assert.ok(Math.abs(balance) < 1e-8)
})
test('zero-interest loan has no extra interest and divides principal by term', () => {
  assert.deepEqual(estimateLoan(12000, 0, 12), { monthlyRate: 0, installment: 1000, total: 12000, interest: 0 })
})
test('very small rates produce finite installments and reconcile principal', () => {
  const result = estimateLoan(10000, 0.000000001, 12)
  assert.ok(Number.isFinite(result.installment))
  assert.ok(Math.abs(result.total - 10000) < 0.00001)
})
test('invalid principal, annual rate and term cannot produce misleading estimates', () => {
  for (const args of [[0,24,12], [NaN,24,12], [10000,-1,12], [10000,Infinity,12], [10000,24,0], [10000,24,1.5]]) {
    assert.throws(() => estimateLoan(...args), RangeError)
  }
})
