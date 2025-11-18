function sumOfSquares(num){
    let sum =0;
    for(i=0;i<=num;i++){
        if(i%2 ==0){
            sum = sum + i**2;
        }
    }
    return sum;
}

var num = parseInt(prompt("Enter the Nth number"));


document.writeln(sumOfSquares(num));

