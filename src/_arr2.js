import _ from "lodash";

const a1 = _.difference([3, 2, 1], [4, 2]);
console.log(a1); // [3,1]

// 创建一个具有唯一array 值的数组，每个值不包含其他给定的数组

const a2 = _.compact([0, 1, false, 2, "", 3]);
console.log(a2); // [1,2,3]

const a3 = _.chunk(["a", "b", "c", "d"], 2);
console.log(a3); //[['a', 'b'], ['c', 'd']]

const a4 = _.drop([1, 2, 3, 4, 5], 3);
console.log(a4); // [4,5]

const a5 = _.dropRight([1, 2, 3, 4, 5], 3);
console.log(a5); // [1,2]

const a6 = _.head([1, 2, 3]);
console.log(a6); // 1
