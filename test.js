var expect  = require("chai").expect;
var calc = require('./main');

describe('Calc', function() {
  var number = calc.calc(10, 10);
  it('should add two numbers', function() {
    expect(number).to.equal(20);
  });

});