var expect  = require("chai").expect;
var calc = require('./main');

describe('Calc', function() {
  var number = calc.calc(15, 15);
  var number2 = calc.calc(0, 0);
  it('should add two numbers', function() {
    expect(number).to.equal(30);
  });

  it('should add two numbers', function() {
    expect(number2).to.equal(0);
  });

});