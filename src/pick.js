// const pick = require("lodash/pick");
const pick = require("lodash/fp/pick");
const omit = require("lodash/fp/omit");

let object = { a: 1, b: "2", c: 3 };
let o1 = pick(["a", "b"], object);
o1;
let o2 = omit(["a"], object);
o2;
console.log(pick);
