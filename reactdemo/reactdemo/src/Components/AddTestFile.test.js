const product = require("./AddTest");
 
test("Product of two numbers", () => {
  expect(product(3, 4)).toBe(10);
});