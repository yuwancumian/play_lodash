const curry = require("lodash/fp/curry");

function foo(a, b, c) {
  return a + b + c;
}
const cfoo = curry(foo);
const a1 = cfoo(2, 2)(3);
a1;

cfoo(1, 2, 3); // 6
cfoo(1)(2, 3); // 6
cfoo(1)(2)(3); // 6
cfoo(1, 2)(3); // 6
