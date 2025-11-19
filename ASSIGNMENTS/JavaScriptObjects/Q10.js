
function Rectangle(length, breadth) {
    this.length = length;
    this.breadth = breadth;
    this.area = function() {
        return this.length * this.breadth;
    };
    this.perimeter = function() {
        return 2 * (this.length + this.breadth);
    };
    this.printData = function(shape) {
        console.log(`\n--- ${shape} Details ---`);
        console.log(`Dimensions: ${this.length} x ${this.breadth}`);
        console.log(`Area: ${this.area()}`);
        console.log(`Perimeter: ${this.perimeter()}`);
    };
}

function Circle(radius) {
    this.radius = radius;
   
    this.area = function() {
        return Math.PI * this.radius * this.radius;
    };
    this.perimeter = function() { 
        return 2 * Math.PI * this.radius;
    };
    this.printData = function(shape) {
        console.log(`\n--- ${shape} Details ---`);
        console.log(`Radius: ${this.radius}`);
        console.log(`Area: ${this.area().toFixed(2)}`);
        console.log(`Circumference: ${this.perimeter().toFixed(2)}`);
    };
}

const rect1 = new Rectangle(10, 5);
rect1.printData("Rectangle");

const circle1 = new Circle(7);
circle1.printData("Circle");