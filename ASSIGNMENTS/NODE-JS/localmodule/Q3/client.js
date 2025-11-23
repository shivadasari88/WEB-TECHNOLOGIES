// client_shapes.js

const circle = require('./circle');
const rectangle = require('./rectangle');
const triangle = require('./triangle');

const r = 5;
console.log(`\nCircle (Radius: ${r}):`);
console.log(`  Area: ${circle.calcArea(r).toFixed(2)}`);
console.log(`  Circumference: ${circle.calcCircumference(r).toFixed(2)}`);

const l = 12, b = 8;
console.log(`\nRectangle (Length: ${l}, Breadth: ${b}):`);
console.log(`  Area: ${rectangle.calcArea(l, b)}`);
console.log(`  Perimeter: ${rectangle.calcPerimeter(l, b)}`);

const s1 = 3, s2 = 4, s3 = 5;
console.log(`\nTriangle (Sides: ${s1}, ${s2}, ${s3}):`);
console.log(`  Perimeter: ${triangle.calcPerimeter(s1, s2, s3)}`);