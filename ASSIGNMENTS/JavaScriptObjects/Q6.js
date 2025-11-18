function squareArrayElements() {
    const initialArray = [1, 5, 2, 8, 4];
  
    const squaredArray = initialArray.map(element => {
        return element * element; 
    });

    console.log("--- Task 5 ---");
    console.log(`Original Array: [${initialArray.join(', ')}]`);
    console.log(`Squared Array: [${squaredArray.join(', ')}]`);
}

squareArrayElements();