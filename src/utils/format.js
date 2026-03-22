/**
 * Formatteert een getal als een geldbedrag.
 * @param {number} amount - Het bedrag.
 * @param {string} currency - De valutacode (standaard 'EUR').
 * @returns {string} Het geformatteerde bedrag, bv. "€ 12,50"
 */
export function formatPrice(amount, currency = "EUR") {
  if (typeof amount !== "number" || isNaN(amount)) return null;
  const number = new Intl.NumberFormat("nl-BE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
  return `€ ${number}`;
}

/**
 * Formatteert een datum als een leesbare string.
 * @param {string|Date} date - Een datum of datumstring.
 * @returns {string} Bv. "21 maart 2026"
 */
export function formatDate(date) {
  const d = new Date(date);
  if (isNaN(d.getTime())) return null;
  return new Intl.DateTimeFormat("nl-BE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(d);
}
