/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running


class Calculator {}
*/
class Calculator {
  constructor() {
    // The constructor is a special method that is automatically called when a new instance of the Calculator class is created.
    // It is used to initialize the object's properties.
    // In this case, the constructor sets the initial value of the 'result' property to 0.
    this.result = 0;
  }

  add(num) {
    // The 'add' method is used to add a number to the current result.
    // It takes a parameter 'num' which represents the number to be added.
    // Before performing the addition, it checks if the 'num' parameter is a valid number using the 'typeof' operator.
    // If 'num' is a number, it adds it to the 'result' property.
    // If 'num' is not a number, it throws an error with the message "Invalid number".
    if (typeof num === "number") {
      this.result += num;
    } else {
      throw new Error("Invalid number");
    }
  }

  subtract(num) {
    // The 'subtract' method is used to subtract a number from the current result.
    // It takes a parameter 'num' which represents the number to be subtracted.
    // Similar to the 'add' method, it checks if 'num' is a valid number before performing the subtraction.
    // If 'num' is a number, it subtracts it from the 'result' property.
    // If 'num' is not a number, it throws an error with the message "Invalid number".
    if (typeof num === "number") {
      this.result -= num;
    } else {
      throw new Error("Invalid number");
    }
  }

  multiply(num) {
    // The 'multiply' method is used to multiply the current result by a number.
    // It takes a parameter 'num' which represents the number to be multiplied.
    // Similar to the previous methods, it checks if 'num' is a valid number before performing the multiplication.
    // If 'num' is a number, it multiplies it with the 'result' property.
    // If 'num' is not a number, it throws an error with the message "Invalid number".
    if (typeof num === "number") {
      this.result *= num;
    } else {
      throw new Error("Invalid number");
    }
  }

  divide(num) {
    // The 'divide' method is used to divide the current result by a number.
    // It takes a parameter 'num' which represents the number to be divided by.
    // Similar to the previous methods, it checks if 'num' is a valid number before performing the division.
    // Additionally, it checks if 'num' is not equal to 0 to avoid division by zero.
    // If 'num' is a valid number and not equal to 0, it divides the 'result' property by 'num'.
    // If 'num' is not a number or equal to 0, it throws an error with the message "Invalid number".
    if (typeof num === "number" && num !== 0) {
      this.result /= num;
    } else {
      throw new Error("Invalid number");
    }
  }

  clear() {
    // The 'clear' method is used to reset the 'result' property to 0.
    // It does not take any parameters.
    // When called, it simply sets the 'result' property to 0.
    this.result = 0;
  }

  getResult() {
    // The 'getResult' method is used to retrieve the current value of the 'result' property.
    // It does not take any parameters.
    // When called, it returns the value of the 'result' property.
    return this.result;
  }

  calculate(expression) {
    // The 'calculate' method is used to evaluate a mathematical expression and update the 'result' property with the calculated value.
    // It takes a parameter 'expression' which represents the mathematical expression to be evaluated.
    // The method uses the 'eval' function to evaluate the expression.
    // Before evaluating, it replaces any consecutive whitespace characters with a single space using a regular expression.
    // The calculated value is then assigned to the 'result' property.
    // If the calculated value is 'Infinity', it throws an error with the message "Infinity".
    // Finally, it returns the calculated value.
    this.result = eval(expression.replace(/\s+/g, " "));
    if (this.result === Infinity) {
      throw new Error("Infinity");
    }
    return this.result;
  }
}

module.exports = Calculator;
