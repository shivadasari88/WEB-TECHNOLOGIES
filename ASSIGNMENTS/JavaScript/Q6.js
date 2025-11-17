var num = 12345;

var sum =0;

while(num > 0){
    let rem = num % 10;
        sum += rem;            
        num = Math.floor(num / 10);
}

 console.log("Sum of digits:", sum);