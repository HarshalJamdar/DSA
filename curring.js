/*Curring : It is technique of converting a function that takes multiple arguments into a sequence of functions that each takes a single argument.
What is the use of function currying in JavaScript?
Currying is a checking method to make sure that you get everything you need before you proceed. It helps you to avoid passing the same variable again and again. It divides your function into multiple smaller functions that can handle one responsibility.*/

function addition(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
let res = addition(2)(3)(4);
console.log(res)


var symbol1 = Symbol('symbol');
console.log(typeof symbol1)

hoistedVariable = 3;
console.log(hoistedVariable); // outputs 3 even when the variable is declared after it becaus of hoisting.
var hoistedVariable;

var x = 3;
var y = "3";
console.log(x - y)//Returns 0 since the variable y (string type) is converted to a number type

const a=(function (){
    console.log("Welcome to GeeksforGeeks!");
})();