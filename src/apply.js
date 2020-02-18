// 应用左边任意数量的参数
function apply(fn, ...args) {
  return (..._args) => {
    return fn(...args, ..._args);
  };
}
