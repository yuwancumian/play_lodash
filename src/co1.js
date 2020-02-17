import _ from "lodash";
var users = [
  { user: "barney", age: 36, active: true },
  { user: "fred", age: 40, active: false },
  { user: "royi", age: 20, active: true }
];

// find
const u1 = _.find(users, item => {
  return item.age > 38;
});

console.log(u1); //   { user: "fred", age: 40, active: false },

const ev1 = _.every(users, ["active", true]);
// 断言每一个元素的active 为 flase
console.log(ev1); //ture

const user = { name: "fred", age: 40 };
const in1 = _.includes(user, "fred"); // true
const in2 = _.includes([2, 3, 4], 2); // true
const in3 = _.includes("pebbles", "ebb"); // true
