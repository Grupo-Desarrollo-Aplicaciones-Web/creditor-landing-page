// Validation only: this module does not store or transmit contact entries.
export function validateContact({ name, email }) {
  const errors = {}
  if (!name?.trim()) errors.name = 'errorRequired'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email?.trim() || '')) errors.email = 'errorEmail'
  return errors
}
