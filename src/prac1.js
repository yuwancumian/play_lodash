const compose = require("lodash/fp/compose");
//5 = 2 * 2 + 1
const multi = a => {
  return a * a;
};

const add1 = b => {
  return b + 1;
};

const c = compose(multi, add1)(2);
console.log(c);
