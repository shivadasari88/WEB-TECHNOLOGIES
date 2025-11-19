
class RectangleClass {
    constructor(length, breadth) {
        this.length = length;
        this.breadth = breadth;
    }

    calculateArea() {
        return this.length * this.breadth;
    }

    calculatePerimeter() {
        return 2 * (this.length + this.breadth);
    }

    displayInfo() {
        console.log(`Length: ${this.length}, Breadth: ${this.breadth}`);
        console.log(`Area: ${this.calculateArea()}`);
        console.log(`Perimeter: ${this.calculatePerimeter()}`);
    }
}

const rectangleArray = [
    new RectangleClass(10, 5),
    new RectangleClass(4, 8),
    new RectangleClass(20, 10),
    new RectangleClass(7, 7), 
    new RectangleClass(15, 3)
];

console.log("\n--- Task 12: Rectangle Array Processing ---");


rectangleArray.forEach((rect, index) => {
    console.log(`\n**Rectangle ${index + 1}**`);
    rect.displayInfo(); 
});