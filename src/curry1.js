function curry(fn) {
  return function curried() {
    var args = [].slice.call(arguments);
    return args.length >= fn.length
      ? fn.apply(null, args)
      : function() {
          var rest = [].slice.call(arguments);
          return curried.apply(null, args.concat(rest));
        };
  };
}
