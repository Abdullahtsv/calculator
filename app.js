var numberOne = +prompt("Enter 1st Value");
var expressions = prompt("Enter expressions");
var numberTwo = +prompt("Enter 2nd Value");

var total;

if(expressions === "/"){
    total = numberOne / numberTwo
    document.write("<h1>" + numberOne + " " + expressions + " " + numberTwo + " " + "=" + " " + total + "</h1>")
}
else if(expressions === "*"){
    total = numberOne * numberTwo
    document.write("<h1>" + numberOne + " " + expressions + " " + numberTwo + " " + "=" + " " + total + "</h1>")
}
else if(expressions === "-"){
    total = numberOne - numberTwo
    document.write("<h1>" + numberOne + " " + expressions + " " + numberTwo + " " + "=" + " " + total + "</h1>")
}
else if(expressions === "+"){
    total = numberOne + numberTwo
    document.write("<h1>" + numberOne + " " + expressions + " " + numberTwo + " " + "=" + " " + total + "</h1>")
}
else{
    document.write("<h1>" + "Error" + "</h1>")
};
