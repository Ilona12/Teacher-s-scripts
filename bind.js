var user = {
  firstName: 'John',
  lastName: 'Doe'
};

var userB = {
  firstName: 'Test',
  lastName: 'Test'
};

var greet = function () {
  return ['Hello', this.firstName, this.lastName].join(' ');
};

var bind = function (targetFunction, context) {
  return function () {
    return targetFunction.apply(context, arguments);
  };
};

var boundGreet = bind(greet, user);

console.log(boundGreet.call(user));
console.log(boundGreet(1,2,3,4));