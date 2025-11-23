
const calc = require('./calc');

const x = 10;
const y = 5;
const z = 8;


console.log(`Add (${x}, ${y}): ${calc.add(x, y)}`);
console.log(`Subtract (${x}, ${y}): ${calc.subtract(x, y)}`);
console.log(`Multiply (${x}, ${y}): ${calc.multiply(x, y)}`);
console.log(`Divide (${x}, ${y}): ${calc.divide(x, y)}`);
console.log(`Square (${x}): ${calc.square(x)}`);

console.log(`Min (${x}, ${y}, ${z}): ${calc.min(x, y, z)}`); // Uses Math.min in calc.js
console.log(`Max (${x}, ${y}, ${z}): ${calc.max(x, y, z)}`); // Uses Math.max in calc.js