/**
 * Zet een string om naar een URL-vriendelijke slug.
 * @param {string} str
 * @returns {string} Bv. "Hallo Wereld!" → "hallo-wereld"
 */
export function slugify(str) {
  if (typeof str !== 'string') return null
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // verwijder accenten
    .replace(/[^a-z0-9\s-]/g, '')   // verwijder speciale tekens
    .trim()
    .replace(/\s+/g, '-')            // spaties → koppeltekens
}

/**
 * Knipt een string af op een bepaalde lengte en voegt "..." toe.
 * @param {string} str
 * @param {number} maxLength
 * @returns {string}
 */
export function truncate(str, maxLength) {
  if (typeof str !== 'string') return null
  if (str.length <= maxLength) return str
  return str.slice(0, maxLength).trimEnd() + '...'
}
