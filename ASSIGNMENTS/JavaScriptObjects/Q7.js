function findAboveAverage() {
    const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]; // 10 numbers
    

    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    

    const average = sum / numbers.length;


    const aboveAverage = numbers.filter(num => num > average);


    console.log(`Numbers Array: [${numbers.join(', ')}]`);
    console.log(`The average of all numbers is: ${average}`);
    console.log("Numbers above average:");
    aboveAverage.forEach(num => console.log(`- ${num}`));
}

findAboveAverage();