/**
 * Begrenst een getal tussen een min- en maximumwaarde.
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function clamp(value, min, max) {
  if (typeof value !== 'number' || typeof min !== 'number' || typeof max !== 'number') return null
  return Math.min(Math.max(value, min), max)
}

/**
 * Berekent de som van een array van getallen.
 * @param {number[]} numbers
 * @returns {number}
 */
export function sum(numbers) {
  if (!Array.isArray(numbers)) return null
  if (numbers.length === 0) return 0
  if (numbers.some(n => typeof n !== 'number')) return null
  return numbers.reduce((acc, n) => acc + n, 0)
}
