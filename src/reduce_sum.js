const arr = [1, 2, 3, 4];
const sum = arr => {
  const output = arr.reduce((acc, value) => {
    return acc + value;
  }, 0);
  return output;
};
const out1 = sum(arr);
console.log(out1);
