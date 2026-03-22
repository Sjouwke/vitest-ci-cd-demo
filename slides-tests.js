import { describe, it, expect } from "vitest";
import { slugify } from "../src/utils/string.js";

describe("slugify", () => {
  it("zet spaties om naar koppeltekens", () => {
    expect(slugify("Hallo Wereld")).toBe("hallo-wereld");
  });
});

expect(value).toBe(42); // strikte gelijkheid (===)
expect(value).toEqual({ a: 1 }); // diepe gelijkheid voor objecten & arrays
expect(value).toBeNull(); // controleert of waarde exact null is
expect(value).toBeUndefined(); // controleert of waarde undefined is
expect(value).toBeTruthy(); // alles behalve false, 0, '', null, undefined
expect(value).toBeFalsy(); // false, 0, '', null, undefined, NaN
expect(value).toContain("euro"); // string bevat substring / array bevat element
expect(value).toBeGreaterThan(0); // getal groter dan...
expect(value).toHaveLength(3); // array of string heeft deze lengte
