export function estimateLoan(principal, effectiveAnnualRate, months) {
  if (!Number.isFinite(principal) || principal <= 0 ||
      !Number.isFinite(effectiveAnnualRate) || effectiveAnnualRate < 0 ||
      !Number.isInteger(months) || months < 1) {
    throw new RangeError('A positive principal, non-negative effective annual rate and positive integer term are required.')
  }
  const monthlyRate = Math.expm1(Math.log1p(effectiveAnnualRate / 100) / 12)
  const installment = monthlyRate === 0
    ? principal / months
    : principal * monthlyRate / -Math.expm1(-months * Math.log1p(monthlyRate))
  const total = installment * months
  return { monthlyRate, installment, total, interest: total - principal }
}
