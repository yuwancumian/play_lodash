const curry = require("lodash/fp/curry");
const times = require("lodash/fp/times");

const greet = curry((greeting, name) => `${greeting}, ${name}!`);

const a = greet("hello", "sum");
a;

times(function() {
  console.log(123);
}, 5);
