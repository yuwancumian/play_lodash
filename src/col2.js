const pick = require("lodash/pick");
// const pick = require("lodash/fp/pick");
var object = { a: 1, b: "2", c: 3 };

const a1 = pick(object, ["b", "c"]);
console.log(a1);
