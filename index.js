// alert("Hello World");
        // One line comment
        /* this is how you do a comment in JS 
        ExternalJS 
        we need a JS file
        We need to link that JS file to our HTML. We still need to 
        use the script tag
        
        */

// alert("We are now using external JS");

/* 
    variables
    As of ES6, we do have two ways of creating a variable and also one way
    for creating a constant.

    Original method for creating variables is to use var.
    Syntax
    var variableName;
    
    Declaring variables with let
    This was introduced in 2015 in ES6.
    let variableName;



*/
var num;
let num2;

// Assignment statements
num = 9;
num2 = 10;

// Variable initialization statement
let total = num + num2;

const PI = 3.14;
let name1 = '"I like programming". Joh\'n said.';

/* Escape characters
\' single quote
\" double quotes
\\ backward slash
\n new line
*/

console.log(name1)

// console.log(num);

/*
    DataTypes in JS
    Primitive Types:
    1. String ex: "This is a string"
    A string is a sequence of characters that are enclosed in single
    quotes or double quotes.

    2. Numbers ex: 12, infinity, 3.14. In JS, all numbers are floats.

    3. Boolean => true or false

    4. null

    5.undefined

    Objects: ex: {key:value}, arrays[1,2,4], function

    null vs undefined:
    undefined: this means a variable has been declared but has not
    been assigned a value yet. ALso if a function does not explicitly
    return a value, then it ends up returing an undefined.

    null: this is an assignment value. This is used to represent an
    absence of a value. In JS null means nothing.


*/
let sum;
console.log(sum);

/*
    Type coercion:
    The process of converting one data to another. This can be implicitly
    or explicitly.
    JS is a weakly-typed language

    2 + 2 = 4
    2 + '2'= 22
    '2'+ 2 = '22'
    '2'+ '2'= '22'
    '2' - 0 = 2


*/

/*
    Functions:
    A function is a block of code that is designed to perform a particular
    task. A function has a name and it is executed when something involves
    it(calls it). Because of ES6, we have 3 different ways of declaring
    functions in JS.
    1. function keyword declaration
    2. function expression saved in a variable
    3. ES6 Arrow functions

    The function keyword declaration
    With this, a function is defined with the function keyword, followed
    by the function name, followed by parentheses().
    Function name can contain letters, digits, underscores, dollar signs,
    A function name cannot start with a number. 
    ex: function functionName(parameter1, parameter2, parameter3, .. parameterM){
        function body. This is the code to be executed when the function is called.
    }




*/

function test(){
    alert("Hello world");
} 
// to call a function. You just use the function name and arguments.
// test();

function getSum(num1, num2){
    console.log(num1 + num2);
}
getSum(90, 20);

/* Hoisting
    Hoisting is JS's default behavior of moving declarations to the top.
     
    When using function functionName(parameters){..} to declare a function,
    this function will hoist to the top of the script.
    ex: x = 10
    var x;
    In JS, a variable can be declared after it has been used.(through
    hoisting).


*/
x = 10;
console.log(x);
var x;

/* 
    Function expressions(function expression saved in a variable)
    A function can be also defined using an expression. A function
    expression can be stored into a variable. After a function has been stored into a variable,
    the variable can be used as a function.
    
    let variableName = function(parameters){code to be executed goes here};
    variableName(arguments);

*/

let getTotal = function(a, b, c){
    return a + b + c
};
let y = getTotal(1, 3, 12);
console.log(y);

/*
    Arrow functions:
    Arrow functions is another new way of creating functions. This was
    added in ES6. They allow us to write shorter function syntax. 
    Syntax for arrow functions:
    arrowFunctionName = (parameters) => {
        code to be executed goes here
    }

    let hello = function(){
    alert("hello world");
}
    convert it into an arrow function
    solution:


*/
let hello = () => {
    let carName = "Toyota" //this is a local variable
    alert("hello world" + carName);
}
/* Global variables
variables declared outside of any function have global scope.
*/
// console.log(carName);
// hello();



/* 
    Scope:
    local and global scope
    Local JS Variables:
    Variables declared within a function, they are local to the function
    Local variables have a function scope. Local variables can only be
    accessed within the function where they are declared.

*/

/*
    Arrays
    arrays are used to hold a collection data and in JS arrays can 
    be able to hold data of different types.

    let arrayName = []; This is an empty array
    let arrayName1 = [value1, value2, value3,...]  

*/
let cunySchools = ["LC", "CCNY", "BCC", "Hostos", "Hunter"];
/*
    to access values from an array, you need the array name and index.
    arrayName[index];

*/
console.log(cunySchools[0]);
console.log(cunySchools.length);
console.log(cunySchools[cunySchools.length-1]);

/*
    Objects:
    This is a way of organizing data using key value pairs.

*/
const car = {make: "Toyota", model: "Matrix"};
/*
    Accessing data from objects
    bracket notation
    objectName["key"]

    dot notation
    objectName.keyName
*/
// bracket notation
console.log(car['model']);

// dot notation
console.log(car.make);

/*
    Functions:
    Higher order functions: its a function that operates on any other
    either as a argument or returning them.

    function outerFunc(cb)
    {
        return cb();
    }
    From example above, which is the higher order function?
    outerFunc. This is because outerFunc takes in cb and returns the call
    of the cb inside it.

    Callback Function:
    is any function that is passed into another function as an argument
    which is then called inside the outer function to complete some
    action. They can be declared as functions, function expression, or
    even anomymous functions.

    function outerFunc(cb){
        return cb();
    }
    What is the callback function in the example?
    cb() is the callback function and outerFunc is the higher order
    function.

*/

function firstFunction(){
displayAlert("hello one");
}
function secondFunction(){
displayAlert("hello two");
}
function displayAlert(text){
 alert(text);
}
secondFunction();
firstFunction();


