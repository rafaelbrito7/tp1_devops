class Calculator {
  sum(a, b) {
    return a + b;
  }
  
  subtraction(a, b) {
    return a - b;
  }
  
  multiplication(a, b) {
    return a * b;
  }

  division(a, b) {
    return a / b;
  }
}

module.exports = new Calculator();