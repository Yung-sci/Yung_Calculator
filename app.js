const path = require('path');
const colors = require('colors');
const calculator = require('./my_module/calculator');

const fileName = path.basename(__filename);
console.log(colors.blue(`Current file: ${fileName}`));

const num1 = 10;
const num2 = 5;

console.log(colors.green(`Addition: ${calculator.add(num1, num2)}`));
console.log(colors.yellow(`Subtraction: ${calculator.subtract(num1, num2)}`));
console.log(colors.cyan(`Multiplication: ${calculator.multiply(num1, num2)}`));
console.log(colors.magenta(`Division: ${calculator.divide(num1, num2)}`));