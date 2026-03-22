import { sum } from "./utils/math.js";
import { formatPrice } from "./utils/format.js";
import { truncate } from "./utils/string.js";

console.log("Sum [1, 2, 3]: ", sum([1, 2, 3])); // 6
console.log("Format 6.2 to euro: ", formatPrice(6.2)); // 6.20
console.log(
  "Kort af naar 'Unit testing is...': ",
  truncate("Unit testing is echt super tof!!!!", 15),
);
