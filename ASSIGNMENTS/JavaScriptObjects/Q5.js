function calculateSumAndAverage() {
    const arr = [11, 22, 33, 44, 55];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    
    const average = sum / arr.length;

    console.log(`Initialized array: [${arr}]`);
    console.log(`The sum of all elements is: ${sum}`);
    console.log(`The average of all elements is: ${average}`);
}

calculateSumAndAverage();