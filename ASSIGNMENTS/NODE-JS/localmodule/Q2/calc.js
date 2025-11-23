


const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b === 0 ? 'Error: Cannot divide by zero' : a / b);
const square = (a) => a * a;

const min = (a, b, c) => Math.min(a, b, c);
const max = (a, b, c) => Math.max(a, b, c);

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    square,
    min,
    max
};