import _ from "lodash";

let obj = {};
_.set(obj, ["x", "y", "z"], 4);
console.log(obj); //{x: {y: {z:4}}}
