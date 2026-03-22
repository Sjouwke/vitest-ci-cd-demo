/**
 * TODO: 1. Importeer de juiste dependencies.
 */
import { describe, it, expect } from "vitest";
import { slugify, truncate } from "../src/utils/string.js";

/**
 * TODO: 2. Test de slugify() functie
 */
// Denk aan: normale string, string met vreemde karakters, accenten op letters, niet-string input,...
describe("slugify", () => {
  it("zet een normale string om naar een slug", () => {
    expect(slugify("Hallo Wereld")).toBe("hallo-wereld");
  });

  it("verwijdert speciale tekens", () => {
    expect(slugify("Web & Design!")).toBe("web-design");
  });

  it("behandelt accenten correct", () => {
    expect(slugify("Café au lait")).toBe("cafe-au-lait");
  });

  it("geeft null terug als input geen string is", () => {
    expect(slugify(42)).toBeNull();
  });
});

/**
 * TODO: 3. Test de truncate() functie
 */
// Denk aan: correcte argumenten, een te korte string, niet-string input,...
describe("truncate", () => {
  it("knipt een lange string af met ...", () => {
    expect(truncate("Dit is een lange zin.", 10)).toBe("Dit is een...");
  });

  it("geeft de originele string terug als die kort genoeg is", () => {
    expect(truncate("Kort", 10)).toBe("Kort");
  });

  it("geeft null terug als input geen string is", () => {
    expect(truncate(123, 5)).toBeNull();
  });
});
