//  intro to function 
//  function NameOfthe function(paratemer){}
 function myIntro (){
    console.log("Yash");
 }
// myIntro
 myIntro()


//  function to add 2 mumbers 

function addtwoNumbers(number1, number2){
    // console.log(number1+number2); if this is giver then result value will be undefined .
    return number1+number2

}

const result = addtwoNumbers(5,6)
console.log("result =" , result);

// more of functions , how the parameter is given 

function loggedinUsername(username){
    if(username){
        return `${username} just logged in`
    }

}
// if none of the value is given then value that comes is undefined 
console.log(loggedinUsername("Yash"));
// loggedinUsername("Yash")

// Spread operator is also known as rest operator (... "and it is spread or rest operator ")

function calculateCartPrice(...num1){

    return num1
}

console.log(calculateCartPrice(200,300,500,600));

// Object in function

const user = {
    userName : "Yash",
    price : 299
}

function handleObject(AnyObject) {

    console.log(`Product is, ${AnyObject.userName} and Price  is, ${AnyObject.price}`);
    
}

// handleObject(user)
handleObject({
    userName: "Yashu",
    price: 5999
})

// to return the 2nd value of an array using function 

const Myarray = [100,500,600,300,5999]

function ReturntheSecondValue(anyArray) {
    return anyArray[1]
}

console.log(ReturntheSecondValue(Myarray));
