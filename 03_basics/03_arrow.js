// gonna learn of this 
const user = {
    username: "Yash",
    price : 999,
    
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    },
    
    
}
//  user.welcomeMessage()
//  user.username = "sam"
//  user.welcomeMessage()
// console.log(this);

function chai() {
    let username ="yash"
    // this keyword can be only used in the object 
    console.log(this.username);
}

chai();

// Declaring function using arrow fumction 

const arrowFunction = () => {
    let username ="yash"
    // this keyword can be only used in the object 
    console.log(this.username);
}
arrowFunction();

// core of arrow function 

// const addTwo = (num1,num2) => {
//     return num1 +num2
// }

// impecit return 

// const addTwo = (num1, num2) => (num1 + num2)

// object must be return in the pranthesis
const addTwo = (num1, num2) => ({username : "Yash"})

console.log(addTwo(5,7));

