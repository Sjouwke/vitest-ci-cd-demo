import { describe, it, expect } from "vitest";
import { sum, clamp } from "../src/utils/math.js";

/**
 * TODO: 1. Test de clamp() functie op minstens 3 van volgende zaken:
 */
describe("clamp", () => {
  // 1. Geeft de waarde terug als die binnen het bereik valt (vb. 5 valt tussen 0 en 10)
  it("geeft de waarde terug als die binnen het bereik valt", () => {
    expect(clamp(5, 0, 10)).toBe(5);
  });
  // 2. De minimumwaarde wordt teruggegeven als we een waarde onder bereik meegeven (vb. -5 valt niet tussen 0 en 10, dus we krijgen 0 terug)
  it("geeft de min terug als de waarde te klein is", () => {
    expect(clamp(-5, 0, 10)).toBe(0);
  });
  // 3. Analoog naar vorige test: geef de maximumwaarde terug indien de waarde boven het bereik ligt
  it("geeft de min terug als de waarde te klein is", () => {
    expect(clamp(15, 0, 10)).toBe(10);
  });
  // 4. Geef null terug bij een ongeldige input
  it("geeft null terug bij ongeldige input", () => {
    expect(clamp("vijf", 0, 10)).toBeNull();
  });
  // 5. Geef null terug bij te weinig parameters
  it("geeft null terug bij te weinig parameters", () => {
    expect(clamp(1)).toBeNull();
  });
});

/**
 * TODO: 2 (EXTRA).  Schrijf nog minstens 2 extra tests voor de sum() functie
 */
// Denk aan: een niet-array meegeven, de array bevat NaN, een lege array...

describe("sum", () => {
  it("berekent de som van een array getallen", () => {
    expect(sum([1, 2, 3])).toBe(6);
  });

  it("geeft 0 terug bij een lege array", () => {
    expect(sum([])).toBe(0);
  });

  it("geeft null terug bij een niet-array", () => {
    expect(sum("hallo")).toBeNull();
  });

  it("geeft null terug als de array niet-getallen bevat", () => {
    expect(sum([1, "twee", 3])).toBeNull();
  });
});
