//Javascript decorator of functions

var sum = function (a, b) {
  return a + b;
};

var measuredExecutionTime = function (targetFunction) {
  return function () {
    console.log(this);
    var label = 'execution time';
    console.time(label);
    var result = targetFunction.apply(this, arguments);
    console.timeEnd(label);
    return result;
  }
};

var math = {
  measuredSum: measuredExecutionTime(sum)
};

console.log(math.measuredSum(5, 5));
