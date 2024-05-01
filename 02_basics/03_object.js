// objects

// singleton if made by a const 
// object.create

// object literalls
// To declare a object 

const mysym = Symbol("key1")

const JsUser = {
    name : "Yash",
    "Full Name ": "Yash Gupta",
    [mysym]: "mykey1",
    email: "yash@gmail.com",
    age :18,
    location: "Banda",
    isLoggedIn: false,

}
// console.log(JsUser);
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["Full Name "]);
// console.log(JsUser[mysym]);
// // to remain unchanged 
// Object.freeze(JsUser.email)
// email: "yashgupta8696"
// console.log(JsUser.email);

JsUser.Greeting = function (params) {
    console.log("Hello Js User");
}
console.log(JsUser.Greeting());
JsUser.Greetingtwo = function () {
    console.log(`Hello my User ${this["Full Name "]}`);
}
console.log(JsUser.Greetingtwo());
































/*Feature
Function
Object
Definition
A block of code that can be invoked and can accept arguments.
A collection of key-value pairs that store data and methods.
Syntax
function functionName(parameters) { code }
const objectName = { key1: value1, key2: value2, ... }
Usage
Functions can be invoked using the functionName() syntax.
Objects can be accessed using the objectName.key syntax.
| Examples | ```javascript
function add(a, b) {
return a + b;
}
const person = {
name: "John Doe",
age: 30,
occupation: "Software Engineer",
};
``` |
| Key differences | Functions can be invoked, while objects cannot. Objects can store data and methods, while functions cannot. |
In JavaScript, functions are first-class objects, which means that they can be passed to other functions, returned from functions, and assigned to variables and properties. This makes functions very versatile and powerful.
Objects are also very versatile and powerful in JavaScript. They can be used to model real-world objects, such as people, cars, and products. Objects can also be used to store data and methods in a structured way.
In general, functions are used to perform actions, while objects are used to store data and model real-world objects. However, there is some overlap between the two concepts. For example, functions can be used to create objects, and objects can be used to store functions.
Ultimately, the best way to decide whether to use a function or an object is to consider the specific needs of your code.**/

