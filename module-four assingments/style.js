// basic of javascript

let name = 'John';
const age = 30;
var country = 'USA';

console.log(name); 

// example2
let num = 0;
while (num < 5) {
    console.log(num); 
    num++;
}
// 

let num1 = 0;
while (num < 5) {
    console.log(num1); 
    num++;
}







let person = {
    firstName: 'Ali',
    lastName: 'abs',
    age: 20,
    greet: function() {
        console.log(`Hello, I'm ${this.firstName} ${this.lastName}`);
    }
};

console.log(person.firstName); 
console.log(person.age); 
person.greet(); 


// example

function addNumbers(a, b) {
    return a + b;
}

let result = addNumbers(5, 7);
console.log(result); 


// Creating a function object to perform various calculations
let calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        return a / b;
    }
};


console.log(calculator.add(10, 5)); 
console.log(calculator.divide(20, 4)); 


// Creating an array of numbers
let numbers = [1, 2, 3, 4, 5];

console.log(numbers[2]); 
numbers.push(6); 
console.log(numbers);


// Function that demonstrates closure
function outerFunction() {
    let outerVariable = 'I am from the outer function';
    function innerFunction() {
        console.log(outerVariable);
    }
    return innerFunction;
}

let closureExample = outerFunction();
closureExample();




// Creating a namespace using an object literal
let myNamespace = {
    variable1: 'Value 1',
    variable2: 'Value 2',
    function1: function() {
        console.log('Function 1');
    },
    function2: function() {
        console.log('Function 2');
    }
};

myNamespace.function1(); 
console.log(myNamespace.variable2);



