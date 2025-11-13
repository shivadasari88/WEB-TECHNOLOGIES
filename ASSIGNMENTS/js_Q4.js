
function cal(a, b, op){
    switch (op) {
        case '+': return a+b
            break;
        case '-': return a-b
            break;
        case '%': return a%b
            break;
        case '*': return a*b 
            break;
        default: document.writeln("Enter a valid input.")
            break;
    }
}

var num1 = parseInt(prompt("Enter first number : "))
var num2 = parseInt(prompt("Enter Second number : "))
var operator =prompt("Enter the operation to perform : ")

document.writeln(cal(num1,num2,operator));