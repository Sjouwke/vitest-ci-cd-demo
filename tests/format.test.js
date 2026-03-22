import { describe, it, expect } from "vitest";
import { formatDate, formatPrice } from "../src/utils/format.js";

/**
 * Uitgewerkt voorbeeld: formDate() tests
 */
describe("formatDate", () => {
  it("formatteert een geldige datum", () => {
    expect(formatDate("2026-03-21")).toBe("21 maart 2026");
  });

  it("geeft null terug bij een ongeldige datum", () => {
    expect(formatDate("geen-datum")).toBeNull();
  });

  it("werkt ook met een Date-object", () => {
    expect(formatDate(new Date("2026-01-01"))).toBe("1 januari 2026");
  });
});

/**
 * TODO: Test de formatPrice() functie op volgende zaken:
 */
describe("formatPrice", () => {
  // 1. Een positief bedrag moet een euroteken krijgen en 2 cijfers na komma
  it("formatteert een positief bedrag als euro", () => {
    expect(formatPrice(12.5)).toBe("€ 12,50");
  });
  // 2. Het getal nul moet correct geformatteerd worden: € 0,00
  it("formatteert nul correct", () => {
    expect(formatPrice(0)).toBe("€ 0,00");
  });
  // 3. Als we een string meegeven, moeten we null terugkrijgen
  it("geeft null terug bij een string", () => {
    expect(formatPrice("twaalf")).toBeNull();
  });
  // 4. Als we NaN meegeven, moeten we null terukgrijken
  it("geeft null terug bij NaN", () => {
    expect(formatPrice(NaN)).toBeNull();
  });
});
