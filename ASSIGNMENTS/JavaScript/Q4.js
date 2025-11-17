var num1 = parseInt(prompt("Enter the first number"));
var num2 = parseInt(prompt("Enter the Second number"));
var operator = prompt("Enter the operator number");

switch (operator) {
    case '+': document.writeln("sum of the two numbers is :"+(num1+num2))
        break;
    case "*": document.writeln("mul of the two numbers is :"+num1*num2)
        break;
    case "-": document.writeln("sub of the two numbers is :"+(num1-num2))
        break;
    case "/": document.writeln("div of the two numbers is :"+num1/num2)
        break;
    default: document.writeln("invalid input retry!")
        break;
}