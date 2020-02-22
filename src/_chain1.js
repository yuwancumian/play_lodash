import _ from "lodash";

var users = [
  { user: "barney", age: 36, active: true },
  { user: "fred", age: 40, active: false },
  { user: "royi", age: 20, active: true }
];
const u1 = _.chain(users)
  .filter(item => item.age > 30)
  .map("user")
  .value();
console.log(u1);
