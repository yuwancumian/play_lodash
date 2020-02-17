import _ from "lodash";
var users = [
  { user: "barney", age: 36, active: true },
  { user: "fred", age: 40, active: false },
  { user: "royi", age: 20, active: true }
];

const arr1 = _.nth(users, -1);
console.log(arr1);
// 对数组的下标方法 array[0] 的增强，可以使用负数
