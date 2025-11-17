var num1 = parseInt(prompt("Enter the first number:"))
var num2 = parseInt(prompt("Enter the Second number:"))
var num3 = parseInt(prompt("Enter the Third number:"))


if(num1>=num2 && num1>=num3){
    document.writeln(num1) ;
}else if(num2>=num3 && num2>=num1){
        document.writeln(num2) ;

}else{
       document.writeln(num3) ;
}
