
function min(arr) {
    if (arr.length === 0) {
        return undefined; 
    }

    let minimum = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minimum) {
            minimum = arr[i];
        }
    }
    return minimum;
}

const numbers = [45, 12, 88, 5, 93, 27];
const minimumValue = min(numbers);

console.log("Array:", numbers);
console.log("The minimum value is:", minimumValue);